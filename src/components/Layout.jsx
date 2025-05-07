import { Link, Outlet } from "react-router-dom";
import profile from '../assets/profile_logo.png'

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/layout/home">Home</Link> 
        <Link to="/layout/virtual">Virtual</Link> 
        <Link to="/layout/connect">Connect Card</Link>
        <Link to="/layout/give">Give</Link>
        <Link to="/layout/events">Events</Link>
        <button>More</button>
        <img src={profile} alt="Profile logo" />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
