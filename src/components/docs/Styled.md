## Why use it

* Automatic critical CSS 
  styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. 
  Combined with code splitting, this means your users load the least amount of code necessary.
* No class name bugs 
  styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
* Easier deletion of CSS
  it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
* Simple dynamic styling 
  adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
* Painless maintenance: 
  you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
* Automatic vendor prefixing
  write your CSS to the current standard and let styled-components handle the rest.
* The CSS Function  
  With Styled Components’ css function, you can use props to conditionally render css, which meant that we no longer had to render conditional class names based on props. This reduces clutter in your components as well as maintains a separation of concerns between CSS and JavaScript.
* Freedom to build custom components with CSS and reuse them
* Native mobile support
* Easily create dynamic CSS 
* Scoped styles 
  There is one very annoying thing about using CSS, and that is the fact that for a non-expert CSS user, it gets really frustrating when you change the style of a particular element or class in your stylesheet and it inversely affects another seemingly unrelated element or behavior in the DOM.
* No-class policy
* Server-side rendering
* CSS unit and snapshot testing
* Sass and polished support
* 22,000 stars on GitHub

### Companies using Styled-components
* Atlassian - https://atlaskit.atlassian.com / http://bitbucket.org/
* Trello - https://trello.com/
* Vimeo - http://vimeo.com/
* Hewlett Packard Enterprise - https://v2.grommet.io/
* AutoDesk - https://web.autocad.com
* Vogue - https://www.vogue.de/
* Coinbase - https://www.coinbase.com/
* Patreon - https://www.patreon.com/

### Companies migrating to styled-components
* MUI - https://material-ui.com/
