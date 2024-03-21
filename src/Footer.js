import footerBackground from "./pic/footerbBackground.png";
import styled from "styled-components";

const Footer = () => {


    return(
        <footer style={ { backgroundImage:`url(${footerBackground})`, paddingBottom:"20px"}}>
            <h2>Contact me</h2>
            <div style={ {textAlign:"center"}}>e-mail: <span style={ {fontFamily:"Gayathri", fontSize:"24px"}}>songwanying2015@gmail.com</span></div>
            <div style={ {textAlign:"center"}}>Art Station: <span style={ {fontFamily:"Gayathri", fontSize:"24px"}}><a target='_blank'
            rel='noopener noreferrer' href="https://wanyingsong.artstation.com/">Wanying Song</a></span></div>
        </footer>
    )
}



export default Footer