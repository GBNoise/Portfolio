import React, { useRef, useEffect } from "react";
import "./HomePage.css";

import githubSVG from "../../imgs/github_icon.svg";
import instagramSVG from "../../imgs/instagramlogo_icon.svg";
import linkedinSVG from "../../imgs/linkedinlogo_icon.svg";

import { SecondPage } from "../SecondPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FirstPage } from "../FirstPage";
import { Thirdpage } from "../ThirdPage";
import { Contact } from "../Contact";
gsap.registerPlugin(ScrollTrigger);
export const HomePage = () => {
  const titleBarRef = useRef(null);
  const lineBarRef = useRef([]);
  lineBarRef.current = [];
  const socialMediaIconRef = useRef([]);
  socialMediaIconRef.current = [];
  const textRef = useRef([]);
  textRef.current = [];

  const FirstPageRef = useRef(null);

  return (
    <>
      <section className="homePage">
        <TitleBar
          titleBarRef={titleBarRef}
          lineBarRef={lineBarRef}
          socialMediaIconRef={socialMediaIconRef}
          textRef={textRef}
        />
        <FirstPage ref={FirstPageRef} />
        <SecondPage
          titleBarRef={titleBarRef}
          socialMediaIconRef={socialMediaIconRef}
        />
        <Thirdpage />
        <Contact />
      </section>
    </>
  );
};

const TitleBar = ({ titleBarRef, lineBarRef, socialMediaIconRef, textRef }) => {
  const socialMediaContainerRef = useRef(null);
  // useEffect(() => {
  //   gsap.to(titleBarRef.current, {
  //     scrollTrigger: {
  //       trigger: titleBarRef.current,
  //     },
  //     duration: 1,
  //     width: "400px",
  //     delay: 1,
  //     x: "20%",
  //     opacity: 1,
  //   });
  // }, []);
  const changeText = (number) => {
    if (number === 1) {
      textRef.current.forEach((item) => {
        item.innerHTML = "PORTFOLIO";
      });
    }
    if (number === 2) {
      textRef.current.forEach((item) => {
        item.innerHTML = "ABOUT";
      });
    }
    if (number === 3) {
      textRef.current.forEach((item) => {
        item.innerHTML = "SKILLS";
      });
    }
    if (number === 4) {
      textRef.current.forEach((item) => {
        item.innerHTML = "CONTACT";
      });
    }
  };

  useEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "0",
          end: "75%",
          scrub: true,
        },
      })
      .to(titleBarRef.current, {
        duration: 2.5,
        delay: 1,
        x: "20%",
        right: "75%",
      })
      .to(
        titleBarRef.current,
        {
          delay: 1.5,
          duration: 2,
          right: "10%",
        },
        ">"
      )
      .to(
        titleBarRef.current,
        {
          delay: 1.5,
          duration: 2,
          right: "75%",
        },
        ">"
      );

    textRef.current.forEach((item) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            scrub: true,
            start: "0",
            end: "75%",
          },
        })
        .call(changeText, [1])
        .to(item, {
          duration: 0.2,
          rotateX: 180,
          rotateY: 180,
        })
        .call(changeText, [2])
        .to(
          item,
          {
            duration: 0.18,
            rotateX: 360,
            rotateY: 360,
          },
          ">"
        )
        .call(changeText, [3])

        .to(
          item,
          {
            delay: 0.02,
            duration: 0.2,
            rotateX: 180,
            rotateY: 180,
          },
          ">"
        )
        .call(changeText, [4]);
    });
  }, []);

  const addToRefLine = (el) => {
    if (!lineBarRef.current.includes(el) && el) {
      lineBarRef.current.push(el);
    }
  };

  useEffect(() => {
    lineBarRef.current.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        width: 0,
        duration: 1,
      });
    });
  }, []);

  const addToRefIcon = (el) => {
    if (!socialMediaIconRef.current.includes(el) && el) {
      socialMediaIconRef.current.push(el);
    }
  };

  useEffect(() => {
    socialMediaIconRef.current.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        opacity: 0,
        duration: 0.5,
        delay: index + 1.5 / 1,
      });
    });
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "0",
          end: "75%",
          scrub: true,
        },
      })
      .to(socialMediaContainerRef.current, {
        duration: 2.5,
        delay: 1,
        left: "0%",
      })
      .to(
        socialMediaContainerRef.current,
        {
          delay: 1.5,
          duration: 2,
          left: "95%",
        },
        ">"
      )
      .to(
        socialMediaContainerRef.current,
        {
          delay: 1.5,
          duration: 2,
          left: "0%",
        },
        ">"
      );
  }, []);

  const addToTextRef = (e) => {
    if (e && !textRef.current.includes(e)) {
      textRef.current.push(e);
    }
  };

  return (
    <section className="titleBarContainer">
      <div className="titleBarPortfolio" ref={titleBarRef}>
        <h1 className="titleBarPortfolio__Text" ref={addToTextRef}>
          PORTFOLIO
        </h1>
        <h1 className="titleBarPortfolio__Text" ref={addToTextRef}>
          PORTFOLIO
        </h1>
        <h1 className="titleBarPortfolio__Text" ref={addToTextRef}>
          PORTFOLIO
        </h1>
      </div>
      <span className="titleBarPortfolio__line line1" ref={addToRefLine}></span>
      <span className="titleBarPortfolio__line line2" ref={addToRefLine}></span>
      <div className="socialMediaIconsContainer" ref={socialMediaContainerRef}>
        <a
          target="_blank"
          href="https://www.instagram.com/_memogb/"
          className="socialMediaIconsContainer__icon"
        >
          <img src={instagramSVG} alt="instagram" ref={addToRefIcon} />
        </a>
        <a
          target="_blank"
          href="https://github.com/GBNoise"
          className="socialMediaIconsContainer__icon"
        >
          <img src={githubSVG} alt="gh" ref={addToRefIcon} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/guillermo-bola%C3%B1os-20bbba222/"
          className="socialMediaIconsContainer__icon"
        >
          <img src={linkedinSVG} alt="Li" ref={addToRefIcon} />
        </a>
      </div>
    </section>
  );
};
