import "./AboutCollegeSection.css";

export default function AboutCollegeSection() {
  const collegeName = "P K college of Engineering and Technology    ";
  const tagline = "Where curiosity becomes impact";

  const stats = [
    { label: "Years of Excellence", value: 42 },
    { label: "Programs", value: 68 },
    { label: "Students", value: "12k+" },
    { label: "Placement Rate", value: "96%" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Heading */}
        <div className="about-header">
          <span className="about-tag">About Us</span>
          <h2 className="about-title">{collegeName}</h2>
          <p className="about-tagline">{tagline}</p>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
