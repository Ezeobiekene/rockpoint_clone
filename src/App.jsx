import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Virtual from "./pages/Virtual";
import Connect from "./pages/Connect";
import Give from "./pages/Give";
import Events from "./pages/Events";
// import reactLogo from './assets/react.svg'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="layout" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="virtual" element={<Virtual />} />
            <Route path="connect" element={<Connect />} />
            <Route path="give" element={<Give />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
