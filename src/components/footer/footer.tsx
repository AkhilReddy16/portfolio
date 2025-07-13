import './footer.css';

function Footer() {
  return (
    <div id="footer" className="text-center">
      <div className="container">
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
          </ul>
        </div>
        <p>&copy; Copyrights Akhil Reddy Kommareddy. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;