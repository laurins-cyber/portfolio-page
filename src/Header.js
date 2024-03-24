import hearderBackground from "./pic/hearderBackground.png";
import styled from "styled-components";

const Header = () => {
    return(
        <header id="header" style={ {backgroundImage: `url(${hearderBackground})`, position:"fixed", width:"100vw"}}>
            <Wrapper>
            <StyleNav href="#work"> →Work </StyleNav>
            <StyleNav href="#project"> →Case </StyleNav>
            <StyleNav href="#footer"> →Contact </StyleNav>

            
            </Wrapper>

        </header>
    )
}

const Wrapper = styled.div`
text-align:center;
padding: 10px;
`

const StyleNav = styled.a`
    text-align:center;
    font-size: 42px;
    margin:50px;
    font-family: "Honk", system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
        "MORF" 15,
        "SHLN" 50;
`


export default Header