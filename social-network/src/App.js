import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="profile/"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="dialogs/*"
              element={<Dialogs state={props.state.messagesPage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
