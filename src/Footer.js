import footerBackground from "./pic/footerbBackground.png";
import styled from "styled-components";
import insta from "./pic/insta.png";
import linkin from "./pic/linkin.png";
import giticon from "./pic/giticon.png";



const Footer = () => {


    return(
        <footer id="footer" style={ { backgroundImage:`url(${footerBackground})`, paddingBottom:"20px"}}>
            <h2>Contact me</h2>
            
            <div style={ {textAlign:"center"}}>e-mail: <span style={ {fontFamily:"Gayathri", fontSize:"24px"}}>songwanying2015@gmail.com</span></div>
            <div style={ {textAlign:"center"}}>Art Station: <span style={ {fontFamily:"Gayathri", fontSize:"24px"}}><a target='_blank'
            rel='noopener noreferrer' href="https://wanyingsong.artstation.com/">Wanying Song</a></span></div>
        <CenterIcons>
            <a href="https://www.instagram.com/laurin_sssong/?igsh=MWdkaTVoc3FhZWE2eQ%3D%3D&utm_source=qr"><Icon src={insta}/></a>
            <a href="https://www.linkedin.com/in/wanying-song-4b7302194"><Icon src={linkin}/></a>
            <a href="https://github.com/laurins-cyber"><Icon src={giticon}/></a>
            </CenterIcons>
        </footer>
    )
}

const Icon = styled.img `
width:3vw;
margin: 20px 2%;
`
const CenterIcons = styled.div`
text-align:center;

`

export default Footer