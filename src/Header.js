import hearderBackground from "./pic/hearderBackground.png";
import styled from "styled-components";
import Navbar from './Navbar';

const Header = () => {
    return(
        <header id="header" style={ {backgroundImage: `url(${hearderBackground})`}}>
            <HomeIcon className="uniquifier">W.L.S</HomeIcon>
            <Navbar/>
        </header>
    )
}

const HomeIcon = styled.h1 `
padding-top:20px;
text-align:center;
`


export default Header