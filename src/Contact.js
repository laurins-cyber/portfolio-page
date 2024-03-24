import { useState } from "react";
import cathover from "./pic/cathover.png";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //emailjs
    }

    return (
        <div>
            <h2>Contact Meow</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input 
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
            </label>
            <label>
                Your E-mail
                <input 
                type="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            <label>
                Meassage
                <input 
                type="text" 
                value={content}
                onChange={(e)=> setContent(e.target.value)}/>
            </label>
        </form>
        <img src={cathover} />
        </div>
    )
}



export default Contact;