import React, { useEffect, useState } from "react";
import "./Navbar.css";
import LogoImage from "../../assets/logo.png"; // Adjust the path to your logo file

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false); // State to manage menu visibility

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const header = document.querySelector(".header");
      const currentScroll = window.pageYOffset;

      // Shrink navbar and change background when scrolling down
      if (currentScroll > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      // Shrink navbar more when scrolling down further
      if (currentScroll > 150) {
        header.classList.add("shrunk");
      } else {
        header.classList.remove("shrunk");
      }

      // Hide navbar when scrolling down and show when scrolling up
      if (currentScroll > lastScroll && currentScroll > 150) {
        header.style.top = "-100px"; // Hide navbar on scroll down
      } else if (currentScroll < lastScroll) {
        header.style.top = "0"; // Show navbar when scrolling up
      }

      lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src={LogoImage} alt="Logo" className="logo-image" />
      </a>
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <a href="#home" className="navbar-items" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" className="navbar-items" onClick={closeMenu}>
          About
        </a>
        <a href="#skills" className="navbar-items" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" className="navbar-items" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" className="navbar-items" onClick={closeMenu}>
          Contact
        </a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i> {/* FontAwesome icon */}
      </div>
    </header>
  );
};

export default Navbar;
