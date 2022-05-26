import "./Navbar.scss";
import { useState } from "react";
import Logo from "../../assets/footer-bg.jpg";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src={"https://playfilm.cf/img-folder/playfilm.png"}
                        alt=""
                    />
                    <Link to="/" className="link">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="nav-icon" />
                    <span>KID</span>
                    <Notifications className="nav-icon" />
                    <img
                        src="https://imgs.search.brave.com/zXXzrLJOha0Enw8eUJBwbjBIm1DotMC8phHW2S_5jAc/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/d2FZTVdBUzhjZmJ5/TUtMRWlRSjJRRDZE/NiZwaWQ9QXBp"
                        //style={{width:"1.7rem",borderRadius:"15px"}}
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="nav-icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logut</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;