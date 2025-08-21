import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>Greenfield Institute</h3>
          <p>
            Empowering students with knowledge and skills to shape the future.
            Excellence in education for over 40 years.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#admission">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 123 College Road, Greenfield City</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@pkinstitution.edu</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Greenfield Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}
