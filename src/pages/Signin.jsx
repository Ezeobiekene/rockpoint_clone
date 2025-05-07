import logo from '../assets/Rockpoint_logo(welcome_page).png'
import { Link } from 'react-router-dom'

const Signin = () => {

    return (
        <>
            <div>
                <img src={logo} alt="Rockpoint Logo" />
                <h1>Welcome</h1>
                <span>powered by FaithConnect</span>
                <form action="">
                    <input placeholder='Enter your email' />
                    <input type='checkbox' id='agreement'/>
                    <label htmlFor="agreement">I agree to <Link to="https://lawrooted.com/pages/faithconnect-app-user-agreement">User Agreement</Link></label>
                    <button>Continue</button>
                </form>
                    
            </div>
        </>
    )
}

export default Signin