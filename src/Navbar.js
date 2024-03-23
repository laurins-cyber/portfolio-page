import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <div id="navbtn">
        <AnchorLink href="#header">
            <button>Top</button>
        </AnchorLink>
        <AnchorLink href="#work">
            <button>Work</button>
        </AnchorLink>
        <AnchorLink href="#project">
            <button>Case</button>
        </AnchorLink>
        </div>
    )
};



export default Navbar;