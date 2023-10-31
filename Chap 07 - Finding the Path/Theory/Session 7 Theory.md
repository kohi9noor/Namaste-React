# Chapter 07 - Finding the Path

## Q: What are various ways to add images into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.

Example:

```
<img src="https://react.js.org/logo-og.png" alt="React Image" />
```

Adding the image into the project `Darg your imge into your project` and `import it` into the desired component

```
import reactLogo from "/reactLogo.png";
export default function App(){
    return <img src={reactLogo} alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App(){
    return <img src={reactLogo} alt="react logo">
}
```

## Q: What whould happen if we do `console.log(useState())`?

A: If we do `console.log(useState())`, we get an `[undefind, function]` where first item in an array is `state` is `undefined` and the second item in an arrau os `setState` `function` is bound dispatchSetState.
A: Syntax of `useEffect` is:

```
useEffect(() => {}, [])
```

Case 1: When the `dependency array is not included` in the arguments of `useEffect() hook,` the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
    console.log("I run everytime this component renders")
})
```

Case 2: When the `dependency array is empty` is the arguments of `useEffect() hook,` the callback function will be executed `one time` during the inital render of the component and also nrender if there is `change in the condition`

```
useEffect(() => {
    console.log("I only run once (When the component gets mounted)")
}, [])
```

Case 3: When the `dependency array contains a condition,` the calllback function will be executed `one time` during the inital render of the component and also rerender if there is a `change in the condition`

```
useEffect(() => {
    console.log("I run every-time when my condition changed")
}, [condition]);
```

## Q: What is `SPA`?

A: `Single page Application (SPA)` is a web application that dynamically updates thee webpage with date from web server without reloading/refershing the entire page. All the HTML CSS, JS are retrieved in the inital load and other data/resources can be loaded dunamically whenever requeired. An SPA is somethimes refered to as a `single interface (SPI).`

## Q: What is the differnce between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side rouing or redering (SSR),` every change in URL, http request is made to server to fatch the webpage, and replace the current webpage with the older one.

In `Client-side rouing or rendering (CSR),` during the first load, the webapp is loaded from server to client, after which whenever there is change in URl library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.
