import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./style.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
);