import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Main from "./Main";
import Navbar from './Navbar';
import Footer from "./Footer";
import "./style.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Header/>
        <Main/>
        <Navbar/>
        <Footer/>
    </div>
);