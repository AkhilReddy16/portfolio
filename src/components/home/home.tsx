import { ReactTyped } from 'react-typed';
import './home.css'
import { generateResume } from '../../utils/generateResume';
import { useEffect, useState } from 'react';
import type { CareerGroup } from '../../modal';
import { Spinner } from 'react-bootstrap';

function Home() {
    const [items, setItems] = useState<CareerGroup[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/portfolio/items.json')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load data:", err);
                setLoading(false);
            });
    }, []);

    const handleDownloadResume = () => {
        if (items.length > 0) {
            generateResume(items);
        } else {
            alert("No career data available to generate resume.");
        }
    };

    return (
        <div id="home" className="home">
            <div className="container">
                {loading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" />
                    </div>
                ) : (
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
                            <li><i onClick={handleDownloadResume} className="bi bi-file-earmark-pdf"></i></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;