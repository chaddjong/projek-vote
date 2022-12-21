import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let a;
let b;
let c;
let d;
let e;
let f;
let randomkarakter1 = "abcdefghijklmnopqrstuvwxyz";
let randomkarakter2 = "abcdefghijklmnopqrstuvwxyz";
document.getElementById("rollButton").onclick = function () {
  a = Math.floor(Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  c = Math.floor(Math.random() * 10) + 1;
  d = Math.floor(Math.random() * 10) + 1;
  e = Math.floor(Math.random() * 10) + 1;
  f = Math.floor(Math.random() * 10) + 1;
  randomkarakter1 = randomkarakter1.charAt(
    Math.random() * randomkarakter1.length
  );
  randomkarakter2 = randomkarakter2.charAt(
    Math.random() * randomkarakter2.length
  );

  document.getElementById("alabel").innerHTML = a;
  document.getElementById("blabel").innerHTML = b;
  document.getElementById("clabel").innerHTML = c;
  document.getElementById("dlabel").innerHTML = d;
  document.getElementById("elabel").innerHTML = e;
  document.getElementById("flabel").innerHTML = f;
  document.getElementById("randomkarakter1label").innerHTML = randomkarakter1;
  document.getElementById("randomkarakter2label").innerHTML = randomkarakter2;
};
