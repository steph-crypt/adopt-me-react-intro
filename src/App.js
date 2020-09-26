import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-special">Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Terrier" />
      <Pet name="Pepper" animal="Bird" breed="Coca" />
      <Pet name="Mipsy" animal="Cat" breed="Maincoon" />
    </div>
  );
};

ReactDOM.render(<App />, React.createElement, document.getElementById("root"));
