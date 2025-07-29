import { useEffect, useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import './carrer.css';
import { generateResume } from '../../utils/generateResume';
import type { CareerGroup } from '../../modal';

function Carrer() {
    const [items, setItems] = useState<CareerGroup[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());


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

    const toggleExpand = (id: number) => {
        setExpandedIds((prev) => {
            const newSet = new Set(prev);
            newSet.has(id) ? newSet.delete(id) : newSet.add(id);
            return newSet;
        });
    };

    const handleDownloadResume = () => {
        if (items.length > 0) {
            generateResume(items);
        } else {
            alert("No career data available to generate resume.");
        }
    };

    return (
        <div id="carrer" className="paddsection">
            <Container>
                {loading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <div className="align-items-center">
                        {items.map(({ name, data }) => (
                            <div key={name} className="d-flex flex-column gap-3 mt-5">
                                <h2 className="text-center">{name}</h2>
                                {data.length === 0 ? (
                                    <p className="text-center text-muted">No data available</p>
                                ) : (
                                    <div className="d-flex flex-column gap-3 w-100">
                                        {data.map(
                                            ({ id, title, company, image, from, to, description }) => (
                                                <Card key={id} className="p-3 shadow-sm" onClick={() => toggleExpand(id)}>
                                                    <div className="career-card-body">
                                                        <img
                                                            src={image}
                                                            alt={title}
                                                            className="career-img"
                                                        />
                                                        <div className="career-content">
                                                            <div className="career-title">
                                                                <div>{title}</div>
                                                                <div>{company}</div>
                                                            </div>
                                                            <div className="career-year text-muted">
                                                                {from} – {to}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {expandedIds.has(id) && description && (
                                                        <ul className="description mt-3 mb-1 ps-4 text-secondary">
                                                            {description.map((point, index) => (
                                                                <li key={index}>{point}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </Card>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        )
                        )}
                    </div>
                )}
                
                <div className="text-center mt-4">
                    <Button variant="primary" onClick={handleDownloadResume}>
                        Download Resume (PDF)
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default Carrer;