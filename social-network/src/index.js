import React from "react";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
};
rerender(store.getState());

store.subscribe(rerender);

reportWebVitals();
