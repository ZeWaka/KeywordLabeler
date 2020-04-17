# KeywordLabeler

> A GitHub bot to label issues and PRs automatically based on keywords in the title and body. Built with [probot](https://github.com/probot/probot) and [glitch](https://glitch.com).

### Installation
After installation, create a `.github/labeler.yml` file in the default branch to enable it.
Example configuration:
```yml
# Number of labels to fetch (optional). Defaults to 20.
numLabels: 40

# Determines if we search the title (optional). Defaults to true.
matchTitle: true

# Determines if we search the body (optional). Defaults to true.
matchBody: true

# Explicit keyword mappings to labels. Form of match:label. Required.
labelMappings:
    [WIP]: WIP
    hooks: documentation 
```

### Contributing
Read the [CONTRIBUTING](CONTRIBUTING.md) guide for information.

### License
This is a fork of [issuelabeler](https://github.com/riyadhalnur/issuelabeler) by Riyadh Al Nur.
It incorporates work by [Rory Quinn](https://github.com/GetSwift/pr-auto-labeler).

Licensed under ISC. See [LICENSE](LICENSE) for more information.
