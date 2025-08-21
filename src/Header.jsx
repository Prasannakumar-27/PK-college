import { useState } from "react";
import "./index.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-name">PK College</div>

      <nav className={`nav ${open ? "open" : ""}`}>
        <ul className="nav-link">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
