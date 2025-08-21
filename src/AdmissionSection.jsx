import "./AdmissionSection.css";

export default function AdmissionSection() {
  return (
    <section id="admission" className="admission-section">
      <div className="admission-container">
        <h2>Admissions Open</h2>
        <p>
          Apply now to join <strong>PK College</strong> and be a part of our vibrant learning community.
          Fill out the admission form below and we’ll reach out to you with the next steps.
        </p>

        <form className="admission-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course</label>
            <select id="course" required>
              <option value="">-- Select --</option>
              <option value="bsc">B.Sc Computer Science</option>
              <option value="bcom">B.Com</option>
              <option value="ba">B.A English</option>
              <option value="mba">MBA</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea id="message" placeholder="Any queries?"></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </section>
  );
}
