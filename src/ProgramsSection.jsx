import "./ProgramsSection.css";
import compImg from "./assets/comp.jpg";
import bcomImg from "./assets/bcom.jpg";
import engImg from "./assets/eng.jpg";
import mbaImg from "./assets/mba.jpg";

export default function ProgramsSection() {
  const programs = [
    {
      title: "B.Sc Computer Science",
      description:
        "Learn programming, algorithms, databases, and cutting-edge technologies to kickstart your IT career.",
      img: compImg, // from public folder
    },
    {
      title: "B.Com",
      description:
        "Gain expertise in commerce, accounting, and finance with real-world business case studies.",
      img: bcomImg,
    },
    {
      title: "B.A English",
      description:
        "Enhance your language, communication, and literature analysis skills for a bright future.",
      img: engImg,
    },
    {
      title: "MBA",
      description:
        "Master business administration, leadership, and management to excel in the corporate world.",
      img: mbaImg,
    },
  ];

  return (
    <section id="programs" className="programs-section">
      <div className="programs-container">
        <h2>Our Programs</h2>
        <p className="programs-intro">
          Explore a wide range of programs designed to provide quality education
          and practical skills for your career.
        </p>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <img src={program.img} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
