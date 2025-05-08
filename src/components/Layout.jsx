import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import profile from '../assets/profile_logo.png'


const Layout = () => {
  const [moreStatus, setMoreStatus] = useState(false)
  const [profileClick, setProfileClick] = useState(false)

  const handleMoreStatus = (event) => {
    event.preventDefault()
    setMoreStatus(!moreStatus)
  }

  const handleProfileClick = (event) => {
    event.preventDefault()
    setProfileClick(!profileClick)
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
        <button onClick={handleProfileClick}> <img src={profile} alt="Profile logo" /> </button>
        {moreStatus && <More />}
        {profileClick && <ProfileIconMore />}
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

const ProfileIconMore = () => {
  return (
    <>
      <div>
        <Link to='#'>View Profile</Link>
        <Link to='#'>Sign Out</Link>
      </div>
    </>
  )
}

export default Layout;
