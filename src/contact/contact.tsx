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
                                        <span> +91 9989155504</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-envelope"></i>
                                        <span> kommareddyakhilreddy@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/*<form className="php-email-form">
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <div className="form-group contact-block1">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="mt-0">
                    <input type="submit" className="btn btn-defeault btn-send" value="Send message" />
                  </div>
                </div>
              </form>*/}
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;