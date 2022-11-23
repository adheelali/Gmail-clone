import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route index element={<EmailList />}/>
            <Route path="/mail" element={<Mail />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
