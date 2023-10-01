# KeywordLabeler

> A GitHub bot to label issues and PRs automatically based on keywords in the title and body. Built with [probot](https://github.com/probot/probot) and [glitch](https://glitch.com).

Current version: `1.5.4`

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

# By default, the keyword labeler look for title/body containing a given word.
# It can create false positif like "fix" being found in "fixture".
# You can use regex instead to reduce those false positif. Defaults to false.
useRegex: false

# Explicit keyword mappings to labels. Form of match:label. Required.
labelMappings:
  "[WIP]": WIP
  hooks: documentation
```

## Contributing

Read the [CONTRIBUTING](CONTRIBUTING.md) guide for information.

## License

Licensed under ISC. See [LICENSE](LICENSE) for more information.
