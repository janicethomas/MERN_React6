import './style.css';
import Nav from "./Nav";
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

function Portfolio() {
    return(
        <div id="wrapper" class="animate">
            <Nav />
            <div class="container-fluid">
                <About />
                <Skills />
                <Contact />
            </div>
        </div>
    )
}

export default Portfolio;