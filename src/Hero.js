import styled from "styled-components";
import selfie from "./pic/selfie.PNG";
import cathover from "./pic/cathover.png"

const Hero = () => {
    return(
        <Board>
        <Typewrite>Hello, I am Wanying Song, AKA Laurin!</Typewrite>
        <img className="photo" src={selfie} />
        <Intro>A full-stack web developper.</Intro>
        <Intro>Also inspired with Accounting, Gaming and User Experience!</Intro>
        <img className="cat" src={cathover} />
        </Board>
    )
}

const Board = styled.div `
padding: 10px 50px;
margin: 10px 20%;
height: 50vh;`

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



export default Hero;