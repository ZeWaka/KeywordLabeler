# TriggeredLabeler

> A GitHub bot to label issues and PRs automatically based on title and body. Built with [probot](https://github.com/probot/probot).

### Installation
After installation, create `.github/labeler.yml` in the default branch to enable it:

```yml
# Number of labels to fetch (optional). Defaults to 20.
numLabels: 40

# Determines if we search the body as well (optional). Defaults to true.
matchBody: true

# Explicit keyword mappings to labels. Form of match:label.
labelMappings:
    WIP: WIP
    \[DNM\]: DNM
```

### Contributing
Read the [CONTRIBUTING](CONTRIBUTING.md) guide for information.

### License
This is a fork of [issuelabeler by Riyadh Al Nur](https://github.com/riyadhalnur/issuelabeler).
It incorporates work by [Rory Quinn](https://github.com/GetSwift/pr-auto-labeler).

Licensed under ISC. See [LICENSE](LICENSE) for more information.

