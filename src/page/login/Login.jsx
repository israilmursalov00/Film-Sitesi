import "./login.scss";

export default function Login() {

    return (
        <div className="login-con">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="playfilm-logo"
                        src={"https://playfilm.cf/img-folder/playfilm.png"}
                        alt=""
                    />
                   </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="emial" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button className="loginButton">
                        Sign In
                    </button>
                    <span>New to Playfilm? <b>Sign Up now</b></span>
                </form>
            </div>
        </div>
    )
}
