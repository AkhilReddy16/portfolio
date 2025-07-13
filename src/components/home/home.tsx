import { ReactTyped } from 'react-typed';
import './home.css'

function Home() {
    return (
        <div id="home" className="home">
            <div className="container">
                <div className="hero-content">
                    <h1>Hi, I'm Akhil Reddy K</h1>
                    {/* <h1>I'm <span className="typed" data-typed-items="Akhil Reddy K, Developer, Freelancer, Analyst"></span></h1> */}
                    <h2>I'm a 
                        <span> <ReactTyped
                        strings={['Developer', 'Freelancer', 'Analyst']}
                        typeSpeed={60}
                        backSpeed={30}
                        loop
                        />
                        </span>
                    </h2>
                    <ul className="list-unstyled list-social">
                        <li><a href="https://github.com/AkhilReddy16"><i className="bi bi-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/akhil-reddy-kommareddy-418315132/"><i className="bi bi-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;