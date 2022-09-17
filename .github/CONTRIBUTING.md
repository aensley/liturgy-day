# Contributing

## Standards

All code in this repository must pass [prettier](https://prettier.io/) linting and [ts-standard](https://github.com/standard/ts-standard). These standards are enforced by [`npm test`](#run-unit-tests), which in turn is a required pre-commit hook.

Any conributions which do not pass the coding standards, unit tests, or integration tests will not be accepted.

## Repository Layout

| Folder      | Contents                    |
| ----------- | --------------------------- |
| / (root)    | Project metadata files      |
| /.github/   | GitHub metadata files       |
| /.vscode/   | Visual Studio Code settings |
| /functions/ | Cloudflare Functions        |
| /src/       | Source code                 |
| /tests/     | Unit and integration tests  |

## Setup

```
npm install
```

## Update

```
npm update
```

## Run Unit Tests

```
npm test
```

## Run Integration Tests

```
npm run integration-test
```
