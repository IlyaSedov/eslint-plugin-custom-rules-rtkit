# eslint-plugin-custom-rules-rtkit

A plugin with a custom set of rules for static AST checking.

**Other Languages:**
[Russian](https://github.com/ari-os310/eslint-plugin-custom-rules-rtkit/blob/HEAD/translations/README.mx.md)

## Why?

This is an eslint plugin that adds self-written rules that are used on several projects in which I am involved. Use them in addition to your rules if you use similar standards for coding.

## Installation

You'll first need to install [ESLint](https://eslint.org/docs/latest/user-guide/getting-started):

```sh
# npm
npm install eslint --save-dev

# yarn
yarn add eslint --dev
```

Next, install `eslint-plugin-custom-rules-rtkit`:

```sh
# npm
npm i eslint-plugin-custom-rules-rtkit --save-dev

# yarn
yarn add eslint-plugin-custom-rules-rtkit --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag in npm, or the `global` prefix in yarn) then you must also install `eslint-plugin-custom-rules-rtkit` globally.

## Usage

Add `custom-rules-rtkit` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["custom-rules-rtkit"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "custom-rules-rtkit/rule-name": 2
  }
}
```
## Rules
| Name         | Description     
|--------------|-----------
| enum-declaration | `Enum` must start with a capital letter and be prefixed with `E`     
| enum-uppercase-propertes | `Enum` properties must be in `upper case`.  
| iterface-declaration | `Interface` names must start with a capital letter and be prefixed with `I`.  
| interface-located | `Interfaces` should be located in a file called `interfaces`.  
| styled-components-declaration      | `styled-components` must start with a capital letter and be prefixed with `S`.  
| styled-components-located      | `styled-components` should be located in a file called `styles`.  
| type-declaration      | `Type` names must start with a capital letter and be prefixed with `T`.  
| type-located      | `Type` should be located in a file called `interfaces`.   