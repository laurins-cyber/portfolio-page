import Hero from "./Hero";
import "./style.css";
import Work from "./Work";
import Portfolio from "./Portfolio";

const Main = () => {
    return(
        <div className="main">
            <section id="home">
                <Hero />
            </section> 
            <section id="project">
                <Portfolio />
            </section>
            <section id="work">
                <Work />
            </section> 
        </div>
    )
}



export default Main