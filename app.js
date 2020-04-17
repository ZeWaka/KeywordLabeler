module.exports = robot => {
  robot.on(
    [
      "issues.opened",
      "issues.reopened",
      "pull_request.opened",
      "pull_request.reopened"
    ],
    async context => {
      const config = await context.config("keylabeler.yml", {
        numLabels: 20,
        matchTitle: true,
        matchBody: true
      });

      if (!config) {
        console.log('Config file named "keylabeler.yml" not found. Exiting.');
        return;
      }

      
      let labelsToAdd = []
      
      const ourIssueOrPR = context.payload.issue
      if (ourIssueOrPR == null) ourIssueOrPR = context.payload.pull_request //If there's no issue field, then it's a pull request trigger

      for (let token in config.labelMappings) {
        if ((config.matchTitle ? ourIssueOrPR.title.includes(token) : false) || (config.matchBody ? ourIssueOrPR.body.includes(token) : false)) {
          labelsToAdd.push(config.labelMappings[token]);
        }
      }

      return context.github.issues.addLabels(
        context.issue({ labels: labelsToAdd })
      );
    }
  );
};
