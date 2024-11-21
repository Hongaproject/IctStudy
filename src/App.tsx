import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./component/Header";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todolist" element={<TodoList />} />

        <Route path="/*" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
