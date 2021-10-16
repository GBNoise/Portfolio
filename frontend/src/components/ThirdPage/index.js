import React, { useRef, useState, useEffect } from "react";
import "./Thirdpage.css";
import { skillsArr } from "./skillsdata";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Thirdpage = () => {
  const thirdPageRef = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "40%",
          end: "75%",
          scrub: true,
        },
      })
      .from(thirdPageRef.current, {
        duration: 20,
        x: -1200,
      })
      .to(
        thirdPageRef.current,
        {
          delay: 50,
          duration: 10,
          x: -1200,
        },
        ">"
      );
  }, []);

  return (
    <section className="thirdPage" id="third">
      <div className="thirdPageContainer" ref={thirdPageRef}>
        <SkillsChart />
      </div>
    </section>
  );
};

const SkillsChart = () => {
  const [data, SetData] = useState(skillsArr);

  const barRefs = useRef([]);
  barRefs.current = [];

  useEffect(() => {
    barRefs.current.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        delay: 0.5,
        width: 0,
        duration: 2,
      });
    });
  }, []);

  const addToRef = (el) => {
    if (el && !barRefs.current.includes(el)) {
      barRefs.current.push(el);
    }
  };

  return (
    <div className="skillsChartContainer">
      <h1>Skill-Set</h1>
      {data.map((skill, index) => {
        const { name, percentage } = skill;
        return (
          <div key={index} className="skillContainer">
            <p
              className="barShow"
              ref={addToRef}
              style={{ width: `${percentage}%` }}
            ></p>
            <span className="skillText" style={{}}>
              <p className="barName">{name}</p>
              <p
                className="barPercentage"
                style={{
                  marginLeft: `${percentage}%`,
                  marginTop: "-25px",
                }}
              >
                {percentage}%
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
};
