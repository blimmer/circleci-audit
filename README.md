oclif-hello-world
=================

oclif example Hello World CLI

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
* [`circleci-audit hello PERSON`](#circleci-audit-hello-person)
* [`circleci-audit hello world`](#circleci-audit-hello-world)
* [`circleci-audit help [COMMAND]`](#circleci-audit-help-command)
* [`circleci-audit plugins`](#circleci-audit-plugins)
* [`circleci-audit plugins:install PLUGIN...`](#circleci-audit-pluginsinstall-plugin)
* [`circleci-audit plugins:inspect PLUGIN...`](#circleci-audit-pluginsinspect-plugin)
* [`circleci-audit plugins:install PLUGIN...`](#circleci-audit-pluginsinstall-plugin-1)
* [`circleci-audit plugins:link PLUGIN`](#circleci-audit-pluginslink-plugin)
* [`circleci-audit plugins:uninstall PLUGIN...`](#circleci-audit-pluginsuninstall-plugin)
* [`circleci-audit plugins:uninstall PLUGIN...`](#circleci-audit-pluginsuninstall-plugin-1)
* [`circleci-audit plugins:uninstall PLUGIN...`](#circleci-audit-pluginsuninstall-plugin-2)
* [`circleci-audit plugins update`](#circleci-audit-plugins-update)

## `circleci-audit hello PERSON`

Say hello

```
USAGE
  $ circleci-audit hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/blimmer/circleci-audit/blob/v0.0.0/dist/commands/hello/index.ts)_

## `circleci-audit hello world`

Say hello world

```
USAGE
  $ circleci-audit hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ circleci-audit hello world
  hello world! (./src/commands/hello/world.ts)
```

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `circleci-audit plugins`

List installed plugins.

```
USAGE
  $ circleci-audit plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ circleci-audit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.9/src/commands/plugins/index.ts)_

## `circleci-audit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ circleci-audit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ circleci-audit plugins add

EXAMPLES
  $ circleci-audit plugins:install myplugin 

  $ circleci-audit plugins:install https://github.com/someuser/someplugin

  $ circleci-audit plugins:install someuser/someplugin
```

## `circleci-audit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ circleci-audit plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ circleci-audit plugins:inspect myplugin
```

## `circleci-audit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ circleci-audit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ circleci-audit plugins add

EXAMPLES
  $ circleci-audit plugins:install myplugin 

  $ circleci-audit plugins:install https://github.com/someuser/someplugin

  $ circleci-audit plugins:install someuser/someplugin
```

## `circleci-audit plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ circleci-audit plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ circleci-audit plugins:link myplugin
```

## `circleci-audit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ circleci-audit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ circleci-audit plugins unlink
  $ circleci-audit plugins remove
```

## `circleci-audit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ circleci-audit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ circleci-audit plugins unlink
  $ circleci-audit plugins remove
```

## `circleci-audit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ circleci-audit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ circleci-audit plugins unlink
  $ circleci-audit plugins remove
```

## `circleci-audit plugins update`

Update installed plugins.

```
USAGE
  $ circleci-audit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
