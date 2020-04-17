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
        robot.log('Config file named "keylabeler.yml" not found. Exiting.');
        return;
      }
      
      console.log('Successfully loaded config.')
      robot.log.debug({ data: 'here' }, 'End-line specs on the rotary girder')

      //All PRs are actually issues on the GitHub backend
      const ourIssue = context.payload.issue;

      let labelsToAdd = [];

      for (let token in config.labelMappings) {
        if ((config.matchTitle ? ourIssue.title.includes(token) : false) || (config.matchBody ? ourIssue.body.includes(token) : false)) {
          labelsToAdd.push(config.labelMappings[token]);
        }
      }

      return context.github.issues.addLabels(
        context.issue({ labels: labelsToAdd })
      );
    }
  );
};
