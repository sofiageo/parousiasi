## Introduction
The LSP was created by Microsoft to define a common language for programming language analyzers to speak.
On 2016 June 27, Microsoft announced a collaboration with Red Hat and Codenvy to standardize the protocol's specification.

The Language Server Protocol (LSP) is an open, JSON-RPC-based protocol for use between source code editors or integrated development environments (IDEs) and servers that provide programming language-specific features. The goal of the protocol is to allow programming language support to be implemented and distributed independently of any given editor or IDE.

### Why LSP?
LSP creates the opportunity to reduce the m-times-n complexity problem of providing a high level of support for any programming language in any editor, IDE, or client endpoint to a simpler m-plus-n problem.

For example, instead of the traditional practice of building a Python plugin for VSCode, a Python plugin for Sublime Text, a Python plugin for Vim, a Python plugin for Sourcegraph, and so on, for every language, LSP allows language communities to concentrate their efforts on a single, high performing language server that can provide code completion, hover tooltips, jump-to-definition, find-references, and more, while editor and client communities can concentrate on building a single, high performing, intuitive and idiomatic extension that can communicate with any language server to instantly provide deep language support.  

### Links
* LangServer - https://langserver.org/