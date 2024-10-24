import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (error) {
            console.error("Hata", error);
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <button onClick={signInWithGoogle} className="login-btn">
                Sign In
            </button>
        </div>
    )

};

export default Login;