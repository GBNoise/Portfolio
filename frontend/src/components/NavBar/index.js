import React, { useRef, useState } from "react";
import "./NavBar.css";
export const NavBar = () => {
  const navRef = useRef(null);
  const [isNav, setIsNav] = useState(false);

  function handleBurgerBtnClick() {
    if (!isNav) {
      setIsNav(true);
      navRef.current.style.transform = "translateY(0)";
    } else {
      setIsNav(false);
      navRef.current.style.transform = "translateY(-1920px)";
    }
  }

  return (
    <>
      <div
        className="burgerBtnContainer"
        onClick={() => handleBurgerBtnClick()}
      >
        <div className="burgerBtn"></div>
        <div className="burgerBtn"></div>
      </div>
      <nav className="navBar" ref={navRef}>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="#fourth">CONTACT ME</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
