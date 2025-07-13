import './contact.css';
import ContactForm from './contactForm';

function Contact() {
    return (
        <div id="contact" className="paddsection">
            <div className="container">
                <div className="contact-block1">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-contact">
                                <h2 className="mb-30">GET IN TOUCH</h2>
                                <ul className="contact-details">
                                    <li><span>936 Pavonia Ave, APT 1B,</span></li>
                                    <li><span>Jersey City, NJ, United States.</span></li>
                                    <li>
                                        <i className="bi bi-telephone"></i>
                                        <span> +1 (859) 979-7249</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-whatsapp"></i>
                                        <span> +91 99891-55504</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-envelope"></i>
                                        <span> kommareddyakhilreddy@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;