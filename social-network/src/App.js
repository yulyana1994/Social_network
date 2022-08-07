import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";


function App({ state }) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='profile/' element={<Profile 
              state = {state.profilePage} />}/>
            <Route path='dialogs/*' element={<Dialogs 
              state={state.messagesPage} />}/>
          </Routes>  
        </div>
          <Friends state={state.sideBar} />
      </div>
    </BrowserRouter>
  );
}

export default App;
