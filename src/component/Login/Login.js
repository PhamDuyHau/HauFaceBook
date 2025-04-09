import React from 'react';
import Button from '@mui/material/Button'; // Assuming you're using Material-UI for Button
import './Login.css'; // You can style your Login component with a separate CSS file.
import {auth, provider, signInWithPopup} from "../../firebase";
import {useStateValue} from "../../StateProvider";
import {actionTypes} from "../../reducer";


function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        signInWithPopup(auth, provider)  // Use modular function
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,  // Set the user in global state
                    user: result.user,  // The user object from Firebase
                });
            })
            .catch((error) => alert(error.message));  // Handle any errors
    };



    return (
        <div className="login">
            <div className="login_logo">
                {/* Facebook Logo Image */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook Logo"
                    className="facebook_logo"
                />

                {/* Facebook Text Image */}
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="Facebook Text"
                    className="facebook_text"
                />

                {/* Sign-In Button */}
                <Button type="submit" onClick={signIn} variant="contained" color="primary">
                    Sign In
                </Button>
            </div>
        </div>
    );
}

export default Login;
