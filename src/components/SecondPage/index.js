import React, { useRef, useEffect } from "react";
import "./SecondPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const SecondPage = ({ titleBarRef, socialMediaIconRef }) => {
  const secondPageRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "15%",
          end: "50%",
          scrub: true,
        },
      })
      .from(secondPageRef.current, {
        duration: 20,
        x: 1200,
      })
      .to(
        secondPageRef.current,
        {
          delay: 45,
          duration: 10,
          x: 1200,
        },
        ">"
      );
  }, []);

  return (
    <section className="secondPage" id="second">
      <div className="aboutMeContainer" ref={secondPageRef}>
        <h1 className="cerotwo">02</h1>
        <span className="aboutMeText">
          <h1>About Me</h1>
          <p>
            Currently, I am studying Systems Engineering and I’ve been studying
            technologies focusing around front-end and back-end development, I
            am always looking forward to learn new things, I’m a fast learner
            and love to face new challenges every day.
          </p>
        </span>
      </div>
    </section>
  );
};
