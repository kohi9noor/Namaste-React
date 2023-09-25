# _Chapter 01 - Inception

## Q: What is `Emmet`?
A: `Emmet` is Designed for to speedup the process of writing and editing code providing a set pf shprtcites that can be quickly expandable to full code blocks.

## Q: Difference between a `Library and Framework`?

A: A `library` takes minium effort to put it into our code and the `Framework` provides the flow of a software application.

## Q: Why is `React known as React`?
A: `React` Is named React because of it's ability to `react to change in data`.

## Q: What is `crossorigin in script tag`?

A: the `crossorigin` attribute sets the mode of the request to an http cors Request, 
purpose of crossorigin us used to share the resources from one domain to another domain.
### Syntax
```sh
<script crossorigin="anonymous|use-credentials">
```
## Q: Why is `React known as React`?

A: because the React was designed to help developers "react" means to changes int he state of an application the UI in reponse to those changes.
## Q: What is difference between `React and ReactDOM`?

A: `React` is a javascript library for building User Interfacses whereas `ReactDOM` is also javascript library that allows `React to interract with the DOM.`
The React package contains `react.createElement()`, `React.Component`, `React.children`, and other helpers Rekated to elements and component classes. You can think of these as the isomporphic or universal helpers that you need to build components. The React-Dom package Contains `ReactDOM.render`, and in react-dom/server we have server-side-rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticmarkup()`.

## What is difference between `react.development.js` and `react.production.js` files via `CDN`

A:  `Development` is the stage of an application before it's made public while`production` is the term used for the same application when it's made `public`.
`Development build` is serveral times(maybe 3-5x) `slower` then `production build`.


## Q: What is `async and defer`?

A: `Async` - The async attribute is a `boolean attribute`. the script is downlaoded in `parallel(in the background)` to parsing the page, and `excuted as soon` as it is avilable (do not block HTML DOM construction during dowloadin the process) and don't wait for anything.

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.


### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```
Unless you're supporting accient legacy system, always add `type=module` to all your script tags:

```sh
<script type="module" src="main.js"> and place it the tag inside</script>
```
```sh
 <script defer nomodule> can be used as a legacy fallback.
```