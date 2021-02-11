# KeywordLabeler

> A GitHub bot to label issues and PRs automatically based on keywords in the title and body. Built with [probot](https://github.com/probot/probot) and [glitch](https://glitch.com).

Current version: `1.5.1`

Marketplace link: https://github.com/marketplace/keywordlabeler

## Installation

After installation, create a `.github/keylabeler.yml` file in the default branch to enable it.
Example configuration:

```yml
# Determines if we search the title (optional). Defaults to true.
matchTitle: true

# Determines if we search the body (optional). Defaults to true.
matchBody: true

# Determines if label matching is case sensitive (optional). Defaults to true.
caseSensitive: false

# Explicit keyword mappings to labels. Form of match:label. Required.
labelMappings:
  "[WIP]": WIP
  hooks: documentation
```

## Contributing

Read the [CONTRIBUTING](CONTRIBUTING.md) guide for information.

## License

Licensed under ISC. See [LICENSE](LICENSE) for more information.
