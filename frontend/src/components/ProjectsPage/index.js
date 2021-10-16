import React from "react";
import "./ProjectsPage.css";
import { dataArr } from "./data";

function ProjectsPage() {
  return (
    <section className="projectsPageSection">
      <div className="projectsContainer">
        {dataArr.map((project) => {
          const { name, description, imgs, link, status } = project;

          return (
            <>
              <div className="singleProject">
                <h1>{name}</h1>
                <div className="projectDescription">
                  <span className="spanDescription">
                    {description}
                    {!status ? (
                      <p style={{ color: "red" }}>WORK IN PROGRESS</p>
                    ) : (
                      <p style={{ color: "green" }}>FINISHED </p>
                    )}
                  </span>
                  <a target="_blank" href={link}>
                    LIVE SITE
                  </a>
                  <span className="techTrigger" style={{ color: "white" }}>
                    {imgs.map((img) => {
                      return <img src={img} alt="tech" />;
                    })}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsPage;
