

const heading = React.createElement(
    "h1",
    {
        id:"title",
        style:{
            background:"Red",
        },
        className:"title"
    },
    "Heading"
);

const heading1 = react.createElement(
    "h1",
    {
        id:"title",
    },
    "heading"
);
  const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading, heading1]
  );

  //create root using createRoot

  const root = ReactDOM.createRoot(document.getElementById("root"));

  //passing react element inside root

  root.render(container);