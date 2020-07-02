module.exports = robot => {
  robot.on(
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
        numLabels: 20,
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

			let fetchedTitle = ourIssueOrPR.title;
			let fetchedBody = ourIssueOrPR.body;

			for (let token in config.labelMappings)
			{

				if (config.caseSensitive === false)
				{
					token = token.toLowerCase()
					fetchedTitle = fetchedTitle.toLowerCase()
					fetchedBody = fetchedBody.toLowerCase()
				}

        if ((config.matchTitle ? fetchedTitle.includes(token) : false) || (config.matchBody ? fetchedBody.includes(token) : false))
				{
          labelsToAdd.push(config.labelMappings[token]);
        }
      }

      return context.github.issues.addLabels(context.issue({ labels: labelsToAdd }));
    }
  );
};
