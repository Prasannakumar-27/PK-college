import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Info Section */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have questions or need more information? Our team is here to help.
            Reach out to us using the form or contact details below.
          </p>

          <div className="info-details">
            <p><strong>📍 Address:</strong> 123 College Road, Greenfield City</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>✉️ Email:</strong> info@pkinstitution.edu</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
