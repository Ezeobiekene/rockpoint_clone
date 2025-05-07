import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Virtual from "./pages/Virtual";
import Connect from "./pages/Connect";
import Give from "./pages/Give";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Privatechat from "./pages/Privatechat";
import Churchnews from "./pages/Churchnews";
import Ladieslg from "./pages/Ladieslg";
import Menslg from "./pages/Menslg"
import Youthlg from "./pages/Youthlg"
import Worshipteam from "./pages/Worshipteam"
import Connectioncard from "./pages/Connectioncard"
import Dashboard from "./pages/Dashboard"

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
            <Route path="profile" element={<Profile />} />
            <Route path="privatechat" element={<Privatechat />} />
            <Route path="news" element={<Churchnews />} />
            <Route path="ladieslg" element={<Ladieslg />} />
            <Route path="menslg" element={<Menslg />} />
            <Route path="youthlg" element={<Youthlg />} />
            <Route path="worship" element={<Worshipteam />} />
            <Route path="connectcard" element={<Connectioncard />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
