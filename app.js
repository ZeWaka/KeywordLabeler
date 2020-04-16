'use strict';

module.exports = app => {
  app.on('issues.opened','issues.reopened','pull_request.opened', 'pull_request.reopened', async context => {

  context.log({ event: context.event, action: context.payload.action })

	const config = await context.config('labeler.yml', { numLabels: 20, matchBody: true });

	if (!config) {
		context.log("Config file named \"labeler.yml\" not found. Exiting.");
		return;
	}

	//All PRs are actually issues on the GitHub backend
	const ourIssueOrPR = await context.github.issues.get(context.issue({ issue_number: context.payload.issue.number }));

	let labelsToAdd = [];

	for (let token in config.labelMappings) {
		if (ourIssueOrPR.data.title.includes(token) || (config.matchBody ? ourIssueOrPR.data.body.includes(token) : false)) {
			labelsToAdd.push(config.labelMappings[token]);
		}
	}

	return context.github.issues.addLabels(context.issue({ labels: labelsToAdd }))

    
  })
}
