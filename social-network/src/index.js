import React from 'react';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import App from "./App";
import { addPost, subscribe, updateNewPostText } from './redux/state';
import ReactDOM from 'react-dom/client';
import state from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = (state) => {
root.render(
  <React.StrictMode>
    <App  state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
  </React.StrictMode>
);
}
rerender(state);

subscribe(rerender);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
