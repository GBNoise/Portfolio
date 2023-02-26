import React from "react";
import "./FirstPage.css";

export const FirstPage = ({ ref }) => {
  return (
    <section className="firstPage" ref={ref} id="first">
      <div className="firstPage__Container">
        <div className="firstPage__imageContainer"></div>
        <span className="firstPage__spanContainer">
          <h1>Guillermo Bolaños</h1>
          <h4>Full-Stack Developer</h4>
          <span className="linksBtns" style={{ marginTop: "5px" }}>
            <a href="/projects">PROJECTS</a>
            <a href="#second">ABOUT ME</a>
            <a href="#third">SKILLS</a>
            <a href="#fourth">CONTACT ME</a>
          </span>
        </span>
      </div>
      <h1 className="fullStackText">Software Dev</h1>
    </section>
  );
};
