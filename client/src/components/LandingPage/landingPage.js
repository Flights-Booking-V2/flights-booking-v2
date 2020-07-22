import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
class LandingPage extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                <h1>Welcome to Flights records</h1>
                {/* <p>Please Sign in</p> */}
                <button ><Link to='/Signin'>Sign in</Link></button>
                
                {/* <p>Or, if you dont have an account</p> */}
                <br></br>
                <button ><Link to="/Signup">Sign up</Link></button>
            </div>
            
        )
    }
}
export default LandingPage;