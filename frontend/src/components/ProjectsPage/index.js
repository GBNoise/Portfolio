import React from "react";
import "./ProjectsPage.css";
import { dataArr } from "./data";

const ProjectsPage = () => {
  const renderProjects = () => {
    const data = [];

    for (let i = 0; i < dataArr.length; i += 2) {
      let first = dataArr[i];
      let second = dataArr[i + 1];
      data.push(
        <div className="two-container">
          <div
            className={second ? "single-project" : "single-project single-big"}
          >
            <span
              className="bg"
              style={{ backgroundImage: `url(${first?.imgUrl})` }}
            ></span>
            <span className="info">
              <h1>{first?.name}</h1>
              {/* <p>{first?.description}</p> */}
              <a href={first?.gh}>GIT</a>
              <a href={first?.link}>LIVE SITE</a>
            </span>
          </div>
          {second && (
            <div className="single-project">
              <span
                className="bg"
                style={{ backgroundImage: `url(${second?.imgUrl})` }}
              ></span>
              <span className="info">
                <h1>{second?.name}</h1>
                {/* <p>{second?.description}</p> */}
                <a href={second?.gh}>GIT</a>
                <a href={second?.link}>LIVE SITE</a>
              </span>
            </div>
          )}
        </div>
      );
    }
    return data.map((el) => el);
  };

  return (
    <>
      <div className="container">
        <span className="projects_bars"></span>
        {renderProjects()}
      </div>
    </>
  );
};

export default ProjectsPage;
