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
            Hello!, My name is Guillermo, I was born in May 20th 2002, I live in
            Honduras. <br /> I am a full-stack developer! I love coding, playing
            videogames and I'm always trying to learn new technologies to expand
            my knowledge, I have a strong understanding of the MERN STACK, and
            Love working with JavaScript and React!
          </p>
        </span>
      </div>
    </section>
  );
};
