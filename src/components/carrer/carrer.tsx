import { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import './carrer.css';

type CareerEntry = {
    id: number;
    title: string;
    company: string;
    image: string;
    from: number | string;
    to: number | string;
};

type CareerGroup = {
    name: string;
    data: CareerEntry[];
};

function Carrer() {
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
                                            ({ id, title, company, image, from, to }) => (
                                                <Card key={id} className="p-3 shadow-sm">
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
            </Container>
        </div>
    );
}

export default Carrer;
/*({ id, title, company, image, from, to }) => (
    <Card key={id} className="p-3 shadow-sm">
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
                <div className="career-year text-muted">{from} – {to}</div>
            </div>
        </div>
    </Card>
)*/