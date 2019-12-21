import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#app-root");

const Loader = () => <p>Loading ...</p>;

const Options = () => <p>Options!</p>;

ReactDOM.render(
  <Suspense fallback={Loader}>
    <Options />
  </Suspense>,
  root
);
