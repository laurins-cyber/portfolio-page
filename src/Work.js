import styled from "styled-components"

const Work = () => {
    return (
    <Board>
        <h2 style={{padding:"10px", textAlign:"center"}}>Work Logs</h2>
        <div style={{padding:"10px", textAlign:"center"}}>
            <h3>2020.01 - Now </h3>
            <h3>LQA TESTER, KEYWORDS STUDIO(MONTREAL)</h3>
            <p>Proofreading texts and video game content (spelling, syntax, typography). Checking texts
            for consistency and recommending changes where necessary. Writing bug reports.
            Performing minor, simple translations. Follow the documented processes at all stages of
            the testing process.</p>
            <p>Skills: English, Mandarin(Simplified Chinese), Basic French</p>
        </div>
        <div style={{padding:"10px", textAlign:"center"}}>
            <h3>2016.12 - 2018.01 </h3>
            <h3>ASSISTANT, SPG REAL ESTATE(MONTRÉAL)</h3>
            <p>Assisting customers with questions and complains. Assisting between departments to
            push project process forward. Assisting managers with schedules, documents
            preparations and emails. Entering database entries. Assisting daily administrative duties.
            Perform training.</p>
            <p>Skills: English, Mandarin(Simplified Chinese), Basic French</p>
        </div>
        <div style={{padding:"10px", textAlign:"center"}}>
            <h3>2016.04 - 2016.12 </h3>
            <h3>SALES ASSOCIATE, AERIANTA INTL. NORTH AMERICA(MONTREAL)</h3>
            <p>Client services, sales and guiding. Assisting mandarin speakers on purchasing steps.
            Actively work with processing, stocking, displaying to maximize selling opportunities.</p>
            <p>Skills: English, Mandarin(Simplified Chinese), Basic French</p>
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