import styled, { keyframes } from "styled-components";
import selfie from "./pic/selfie.PNG";


const Hero = () => {


    return(
        <Board>
            <StyledImg src={selfie} />
        <Typewrite>Hello, I am Wanying Song, AKA Laurin!</Typewrite>
        <Intro>A full-stack web developper.</Intro>
        <Intro>Also inspired with Accounting, Gaming and User Experience!</Intro>
        
            <Tech>
                · HTML · CSS · Node.JS · React · mongoDB  ·Figma · Photoshop · Procreate . UX/UI
            </Tech>
        </Board>
    )
}

const Board = styled.div `
padding: 10px 50px;
margin: 10px 20%;`

const Typewrite = styled.p`
font-family: "Pixelify Sans", sans-serif;
font-optical-sizing: auto;
font-weight: bold;
font-style: normal;
font-size: 42px;
color: gold;
padding:50px 0px;
width:40%;
text-align: justify;`

const Intro = styled.p `
color:white;
font-size:24px;`

const StyledImg = styled.img`
height: 300px;
width: 240px;
float: right;
border-radius: 10%;
&:hover {
    transform: scaleX(-1);
}`

const Catimg = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 10%;
margin-right:50%;
&:hover {
    transform: scaleX(-1);
}`



const techAnimate = keyframes`
from {left: 0px;}
to {left: 200px;}
`

const Tech = styled.ul`
transform: rotate(-3deg);
background-color:gold;
border: 2px dashed black;
margin:auto;
text-align: center;
font-family: "Pixelify Sans", sans-serif;
font-weight: bold;
margin-top:10px;
animation-name:${techAnimate};
`


export default Hero;