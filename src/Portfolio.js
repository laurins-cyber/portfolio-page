import styled from "styled-components";
import loadE from "./pic/loadE.jpg";
import Project1 from "./pic/Project1.png";



const Portfolio = () => {
    return(
        <>
        
            <Board>Project Space</Board>
            <Container>
                <Box>
                    <a href="https://github.com/cb-wd-31/project-js-nyan-cat/pull/4">
                    <Title> Project 1 - Game: Capybara</Title>
                    <Proimg src={Project1}/>
                    </a>
                </Box>
                <Box>
                    <a href="https://github.com/laurins-cyber/react-useState/commit/ccb5ee5cc41e1a72e0eb7711d362d7eb0621b9e0">
                    <Title> Project 2 - Board Game: TicTacToe</Title>
                    <Proimg src={loadE}/>
                    </a>
                </Box>
                <Box>
                    <a href="https://github.com/laurins-cyber/FinalProject_Recipe">
                    <Title> Project 3 - Empty your Fridge - Recipe</Title>
                    <Proimg src={loadE}/>
                    </a>
                </Box>
                <Box>
                    <a href="https://github.com/laurins-cyber/project-GROUP-e-commerce">
                    <Title> Project 4 - Ecommerce - Groupe work</Title>
                    <Proimg src={loadE}/>
                    </a>
                </Box>
                <Box>
                    <a>
                    <Title> Project 5 - Pet Support - Currently working</Title>
                    <Proimg src={loadE}/>
                    </a>
                </Box>
            </Container>
        </>
    )
}


const Container = styled.div`
margin: 0px 20%;
`

const Box = styled.div`
border: 3px dashed rgb(93, 191, 233);
border-radius:15px;
background-color: white;
float:left;
width:31%;
margin: 10% 6px;
`

const Title = styled.div`
text-align:center;
padding: 15px;
font-size:bold;
font-size:16px;
`

const Proimg = styled.img`
width: 100%;
height: auto;
border-radius:5%;
opacity:0.5;
&:hover{
    box-shadow: 0 0 2px 1px gold 0.8;
    opacity:1;
}
`

const Board = styled.h2 `
border: 3px dashed rgb(93, 191, 233);
border-radius:15px;
background-color: white;
padding: 20px 50px;
margin: 10px 20%;
`


export default Portfolio;