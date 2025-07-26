import { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/portfolio/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading portfolio:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div id="portfolio" className="paddsection">
      <Container>
        <h2 className="text-center mb-5">My Projects</h2>
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map(({ id, title, description, image, link }) => (
              <Col key={id}>
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={image}
                    alt={title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button
                      variant="primary"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Portfolio;
