import { useEffect, useState } from 'react';
import { generateResume } from '../../utils/generateResume';
import './footer.css';
import type { CareerGroup } from '../../modal';
import { Spinner } from 'react-bootstrap';

function Footer() {
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
    <div id="footer" className="text-center">
      <div className="container">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <div className="socials-media text-center">
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/AkhilReddy16">
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/akhil-reddy-kommareddy-418315132/">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="void(0)" onClick={handleDownloadResume}>
                  <i className="bi bi-file-earmark-pdf"></i>
                </a>
              </li>
            </ul>
          </div>
        )}
        <p>&copy; Copyrights Akhil Reddy Kommareddy. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;