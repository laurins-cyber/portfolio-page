import styled from "styled-components";



const Portfolio = () => {
    return(
        <>
        <Board>
            <h2>Project Space</h2>
            <Container>
                <Box>Project 1</Box>
                <Box>Project 2</Box>
                <Box>Project 3</Box>
            </Container>
        </Board>
        </>
    )
}

const Card = styled.p `
display:block;
`

const Container = styled.ul`
display: inline;`

const Box = styled.li`

`
const Board = styled.div `
border: 3px dashed rgb(93, 191, 233);
border-radius:15px;
background-color: white;
padding: 10px 50px;
margin: 10px 20%;`


export default Portfolio;