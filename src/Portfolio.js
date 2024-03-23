import styled from "styled-components";
import loadE from "./pic/loadE.jpg";



const Portfolio = () => {
    return(
        <>
        
            <Board>Project Space</Board>
            <Container>
                <Box>
                    <a>
                    <Title> Project 1</Title>
                    <Proimg src={loadE}/>
                    </a>
                </Box>
                <Box>
                    <a>
                    <Title> Project 2</Title>
                    <Proimg src={loadE}/>
                    </a>
                </Box>
                <Box>
                    <a>
                    <Title> Project 3</Title>
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