module.exports = (app, { getRouter }) => {
  app.on(
    [
      "issues.opened",
      "issues.reopened",
      "issues.edited",
      "pull_request.opened",
      "pull_request.reopened",
      "pull_request.edited"
    ],
    async context => {
      const config = await context.config("keylabeler.yml", {
        matchTitle: true,
        matchBody: true,
        caseSensitive: true
      });

      if (!config) {
        console.log('Config file named "keylabeler.yml" not found. Exiting.');
        return;
      }

      let labelsToAdd = [];

      var ourIssueOrPR = context.payload.issue;
      if (ourIssueOrPR == null) ourIssueOrPR = context.payload.pull_request; //If there's no issue field, then it's a pull request trigger 😎

      let fetchedTitle = ourIssueOrPR.title.slice();
      let fetchedBody = ourIssueOrPR.body.slice();

      if (config.caseSensitive === false) {
        fetchedTitle = fetchedTitle.toLowerCase();
        fetchedBody = fetchedBody.toLowerCase();
      }

      for (let token in config.labelMappings) {
        let tokenName = token.slice();

        if (config.caseSensitive === false) {
          tokenName = tokenName.toLowerCase();
        }

        if (
          (config.matchTitle ? fetchedTitle.includes(tokenName) : false) ||
          (config.matchBody ? fetchedBody.includes(tokenName) : false)
        ) {
          labelsToAdd.push(config.labelMappings[token]);
        }
      }

      return context.octokit.issues.addLabels(
        context.issue({ labels: labelsToAdd })
      );
    }
  );
};
