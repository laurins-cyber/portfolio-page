import hearderBackground from "./pic/hearderBackground.png";
import styled from "styled-components";

const Header = () => {
    return(
        <header style={ {backgroundImage: `url(${hearderBackground})`}}>
            <HomeIcon className="uniquifier">W.L.S</HomeIcon>
        </header>
    )
}

const HomeIcon = styled.h1 `
padding-top:20px;
text-align:center;
`


export default Header