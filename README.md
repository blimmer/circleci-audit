circleci-audit
=================

This is a simple tool that helps audit CircleCI context environment variables need to be rotated in response
to the [January 4, 2023 security incident](https://circleci.com/blog/january-4-2023-security-alert/).

Secrets that need rotation are highlighted for easy identification.

![example output of circleci-audit contexts command](https://user-images.githubusercontent.com/630449/211111479-ab2f8a2c-5200-4ded-8c5e-aee2bce1f753.png)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g circleci-audit
$ circleci-audit COMMAND
running command...
$ circleci-audit (--version)
circleci-audit/0.0.0 darwin-arm64 node-v18.12.1
$ circleci-audit --help [COMMAND]
USAGE
  $ circleci-audit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`circleci-audit contexts`](#circleci-audit-contexts)
* [`circleci-audit help [COMMAND]`](#circleci-audit-help-command)

## `circleci-audit contexts`

Audit CircleCI contexts for exposed secrets

```
USAGE
  $ circleci-audit contexts -o <value> -t <value>

FLAGS
  -o, --orgId=<value>  (required) Your organization's ID. Find it on app.circleci.com, click 'Organization Settings'.
                       It's a UUID.
  -t, --token=<value>  (required) A CircleCI API token. Generate one here:
                       https://app.circleci.com/settings/user/tokens.

DESCRIPTION
  Audit CircleCI contexts for exposed secrets

EXAMPLES
  $ circleci-audit contexts --token $CIRCLECI_TOKEN --orgId YOUR-ORG-UUID
```

_See code: [dist/commands/contexts/index.ts](https://github.com/blimmer/circleci-audit/blob/v0.0.0/dist/commands/contexts/index.ts)_

## `circleci-audit help [COMMAND]`

Display help for circleci-audit.

```
USAGE
  $ circleci-audit help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for circleci-audit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.22/src/commands/help.ts)_
<!-- commandsstop -->
