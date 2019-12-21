import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import icon from "../assets/icons/hexagon.svg";

const root = document.querySelector("#app-root");

const Loader = () => <p>Loading ...</p>;

ReactDOM.render(
  <Suspense fallback={Loader}>
    <div className="flex flex-row items-center">
      <img src={icon} />
      <p className="text-red-500">Popup!</p>
    </div>
  </Suspense>,
  root
);
