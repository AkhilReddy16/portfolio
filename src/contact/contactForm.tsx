import { useState } from 'react';
import './contact.css';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Check honeypot
    if (formData.get('honeypot')) return;

    try {
      const response = await fetch('https://formsubmit.co/ajax/kommareddyakhil99@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success === 'true') {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Failed to send. Try again later.');
      }
    } catch (err) {
      setStatus('An error occurred. Try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="php-email-form">
      <div className="row gy-3">
        <div className="col-lg-6">
          <input type="text" name="name" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="col-lg-6">
          <input type="email" name="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="col-lg-12">
          <input type="text" name="subject" className="form-control" placeholder="Subject" required />
        </div>
        <div className="col-lg-12">
          <textarea name="message" className="form-control" placeholder="Message" required></textarea>
        </div>

        {/* Honeypot field (spam protection) */}
        <div style={{ display: 'none' }}>
          <input type="text" name="honeypot" />
        </div>

        {/* Disable FormSubmit CAPTCHA */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="mt-0">
          <input type="submit" className="btn btn-defeault btn-send" value="Send message" />
        </div>

        {status && (
          <div className="col-lg-12 mt-3">
            <div className="sent-message">{status}</div>
          </div>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
