import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import cv from "./CV_GuillermoBolanos.pdf";

const pages = { "/": "HOME", projects: "PROJECTS" };
const sections = { second: "ABOUT ME", third: "SKILLS", fourth: "CONTACT ME" };

export const NavBar = () => {
  const navRef = useRef(null);
  const [isNav, setIsNav] = useState(false);
  const location = useLocation();

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
          {Object.entries(pages).map((el, i) => (
            <li key={i} onClick={() => handleBurgerBtnClick()}>
              <Link to={el[0]}>{el[1]}</Link>
            </li>
          ))}

          {location.pathname === "/" &&
            Object.entries(sections).map((el, i) => (
              <li key={i} onClick={() => handleBurgerBtnClick()}>
                <a href={"#" + el[0]}>{el[1]}</a>
              </li>
            ))}

          <li>
            <a href={cv} download="cv.pdf">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
