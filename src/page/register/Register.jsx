import "./register.scss";
import { useState, useRef } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="playfilm-logo"
                        src={"https://playfilm.cf/img-folder/playfilm.png"}
                        alt=""
                    />
                    <button className="loginButton">
                        Sign In
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV Shows, and more.</h1>
                <h1>Watch anywhere. cancel anytime.</h1>
                <p>
                    Ready to watch? Enter your email to create or register your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Email Address" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>
                            Get Started
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="Password" ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish} >
                            Start
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}
