# Build Setup Notes


### Environment Variables

| Variable | Description |
| -------- | ----------- |
| `ULLD_DEV_ROOT` | Path to root of monorepo |
| `ULLD_TEST_ROOT` | Path to root of template app |
| `ULLD_ADDITIONAL_SOURCES` | Path to additional sources directory as described in the docs. |
| `ULLD_CLI_DEVROOT` | Path to root of Go cli |
| `ULLD_TEST_ROOT` | Path to use for testing against a build output |


### Development Requirements

- `@ulld/developer-cli` package installed or aliased to `ulldDev`.
  - The following alias will work but requires tsx to be installed
- `Golang` installed and available on path.
- `dotenvx` installed globally.
- `gum`, a shell scripting utility library used in some git hooks.

```zsh
alias ulldDev="tsx $ULLD_DEV_ROOT/packages/developer-cli/src/cli.tsx"
```
