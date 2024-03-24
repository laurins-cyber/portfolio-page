import styled, { keyframes } from "styled-components";
import selfie from "./pic/selfie.PNG";


const Hero = () => {


    return(
        <Board>
            <StyledImg id="selfie" src={selfie} />
        <Typewrite>Hello, I am Wanying Song, AKA Laurin!</Typewrite>
        <Intro>A full-stack web developper.</Intro>
        <Intro>Also inspired with Accounting, Gaming and User Experience!</Intro>
        
            <Tech>
                · HTML · CSS · Node.JS · React · mongoDB  ·Figma · Photoshop · Procreate | UX/UI
            </Tech>
        </Board>
    )
}

const Board = styled.div`

`

const Typewrite = styled.p`
font-family: "Pixelify Sans", sans-serif;
font-optical-sizing: auto;
font-weight: bold;
font-style: normal;
font-size: 42px;
color: gold;
width:40%;
padding:50px;
text-align: justify;`

const Intro = styled.p `
color:white;
padding: 0px 50px;
font-size:24px;`

const StyledImg = styled.img`
padding-right:100px;
height: 300px;
width: 240px;
float: right;
border-radius: 10%;
&:hover {
    transform: scaleX(-1);
}`




const techAnimate = keyframes`
from {left: 0px;}
to {left: 200px;}
`

const Tech = styled.div`
transform: rotate(-3deg);
background-color:gold;
border: 2px dashed black;
text-align: center;
font-size:24px;
font-family: "Pixelify Sans", sans-serif;
font-weight: bold;
margin:80px 0px;

animation-name:${techAnimate};
`


export default Hero;