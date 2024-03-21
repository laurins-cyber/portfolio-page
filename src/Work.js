import styled from "styled-components"

const Work = () => {
    return (
    <Board>
        <h2>Work Logs</h2>
        <div className="left">
            <h3>2020.01 - Now </h3>
            <h3>Localization Quality Assurance LQA</h3>
            <p>Responsibility</p>
            <p>Skills</p>
        </div>
        <div className="right">
            <h3>2016.12 - 2018.01 </h3>
            <h3>Accounting Assistant</h3>
            <p>Responsibility</p>
            <p>Skills</p>
        </div>
        <div className="left">
            <h3>2016.04 - 2016.12 </h3>
            <h3>Sales Reprisentative</h3>
            <p>Responsibility</p>
            <p>Skills</p>
        </div>
    </Board>
    )
}

const Board = styled.div `
border: 3px dashed rgb(93, 191, 233);
border-radius:15px;
background-color: white;
padding: 10px 50px;
margin: 10px 20%;`

export default Work