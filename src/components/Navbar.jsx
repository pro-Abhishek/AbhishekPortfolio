import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import "../components/navbar.css";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const changeToggle = () => {
    setToggleButton(!toggleButton);
  };
  return (
    // <>
    //   <div
    //     className="container nav_bar"
    //     data-aos="fade-down"
    //     data-aos-duration="1000"
    //   >
    //     <div className="left nav_items">Portfolio</div>
    //     <div className="right">
    //       <a href="#home" className="nav_items">
    //         Home
    //       </a>
    //       <a href="#experience" className="nav_items">
    //         Experience
    //       </a>
    //       <a href="#skills" className="nav_items">
    //         Skills
    //       </a>
    //       <a href="#projects" className="nav_items">
    //         Projects
    //       </a>
    //       <a href="#contact" className="nav_items">
    //         Contact
    //       </a>
    //     </div>
    //   </div>
    // </>

    <>
      <header>
        <div className="navbar">
          <div className="logo">Portfolio</div>
          <ul className="links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <a href="#" className="action_btn">Get Started</a> */}
          <div className="toggle_btn">
            {toggleButton == false ? (
              <MdOutlineMenu onClick={changeToggle} />
            ) : (
              <IoMdClose onClick={changeToggle} />
            )}
          </div>
        </div>

        <div
          className={
            toggleButton == false ? "dropdown_menuMobile" : "dropdown_menu"
          }
        >
          <li>
            <a href="#hero" onClick={changeToggle}>
              Home
            </a>
          </li>
          <li>
            <a href="#experience" onClick={changeToggle}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={changeToggle}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={changeToggle}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={changeToggle}>
              Contact
            </a>
          </li>
        </div>
      </header>
    </>
  );
};

export default Navbar;
