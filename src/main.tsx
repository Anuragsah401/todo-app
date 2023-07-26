/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo.tsx";
import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
