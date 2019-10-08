## Introduction

ESLint is an open source JavaScript linting utility. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.

JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

### Philosophy
    
Everything is pluggable:
    
* Rule API is used both by bundled and custom rules
* Formatter API is used both by bundled and custom formatters
* Additional rules and formatters can be specified at runtime
* Rules and formatters don’t have to be bundled to be used

Every rule:

* Is standalone
* Can be turned off or on (nothing can be deemed “too important to turn off”)
* Can be set to a warning or error individually


#### Typescript support

Monorepo ESLint for Typescript: https://typescript-eslint.io/

### Links

* Typescript plugin: https://github.com/typescript-eslint/typescript-eslint
* TSConfig.json: http://www.typescriptlang.org/docs/handbook/tsconfig-json.html