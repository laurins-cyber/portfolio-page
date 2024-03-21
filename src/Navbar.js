import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div id="navbtn">
        <AnchorLink href="#home">
            <button>Home</button>
        </AnchorLink>
        <AnchorLink href="#work">
            <button>Work</button>
        </AnchorLink>
        <AnchorLink href="#project">
            <button>Project</button>
        </AnchorLink>
        
        </div>
    )
};



export default Navbar;