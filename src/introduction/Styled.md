## Introduction

### Points for Styled components

* Styled components is a CSS-in-JS styling framework that uses tagged template literals in JavaScript and the awesome power of CSS to provide a platform that allows you to write actual CSS to style react components.
* CSS-in-JS is a technique where JavaScript is used to style components. When this JavaScript is parsed, CSS is generated as a style element and attached directly on top of the DOM.
* Visual primitives for the component age.
* Use the best bits of ES6 and CSS to style your apps

Apart from the improved experience for developers, styled-components provides:

* **Automatic critical CSS**: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.
* **No class name bugs**: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
* **Easier deletion of CSS**: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
* **Simple dynamic styling**: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
* **Painless maintenance**: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
* **Automatic vendor prefixing**: write your CSS to the current standard and let styled-components handle the rest.

You get all of these benefits while still writing the CSS you know and love, just bound to individual components.
