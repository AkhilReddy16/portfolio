import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { useScrollSpy } from './useScrollSpy';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [hideNav, setHideNav] = useState(true);
  const homeRef = useRef<HTMLElement | null>(null);

  const sectionIds = ['home', 'about', 'skills', 'carrer', 'portfolio', 'contact'];
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    homeRef.current = document.getElementById('home');
    if (!homeRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideNav(entry.isIntersecting); // Hide when home is in view
      },
      { threshold: 0.5 } // Adjust visibility % as needed
    );

    observer.observe(homeRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className={hideNav ? 'hidden-navbar' : ''}
    >
      <Container>
        <Navbar.Brand href="#home">My Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {sectionIds.map((id) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={activeId === id ? 'active' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
