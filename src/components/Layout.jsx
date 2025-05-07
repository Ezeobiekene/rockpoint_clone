import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import profile from '../assets/profile_logo.png'
import Churchnews from "../pages/Churchnews";

const Layout = () => {
  const [moreStatus, setMoreStatus] = useState(false)

  const handleMoreStatus = (event) => {
    event.preventDefault()
    setMoreStatus(!moreStatus)
  }
// Notes: 1. remember to close the "more" when any other button is clicked, set more to false
// 

  return (
    <div>
      <nav>
        <Link to="/layout/home">Home</Link> 
        <Link to="/layout/virtual">Virtual</Link> 
        <Link to="/layout/connect">Connect Card</Link>
        <Link to="/layout/give">Give</Link>
        <Link to="/layout/events">Events</Link>
        <button onClick={handleMoreStatus}>More</button>
        <img src={profile} alt="Profile logo" /> 
        {moreStatus && <More />}
      </nav>
      <Outlet />
    </div>
  );
};

const More = () => {
  return ( 
    <>
      <Link to='/layout/profile'>My Profile</Link>
      <Link to='/layout/privatechat'>Private Member Chats</Link>
      <Link to='/layout/news'>Church News</Link>
      <Link to='/layout/ladieslg'>Ladies Lifegroup</Link>
      <Link to='/layout/menslg'>Men's Lifegroup</Link>
      <Link to='/layout/youthlg'>Youth Lifegroup</Link>
      <Link to='/layout/worship'>Wordship Team</Link>
      <Link to='/layout/connectcard'>Connection Card Received</Link>
      <Link to='/layout/dashboard'>Dashboard</Link>
    </>
  )
}

export default Layout;
