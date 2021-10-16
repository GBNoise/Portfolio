import nodeSvg from "../../imgs/node-js.svg";
import reactSvg from "../../imgs/react.svg";
import expressSvg from "../../imgs/express.svg";
import mongoSvg from "../../imgs/mongodb.svg";

export const dataArr = [
  {
    name: "Personal Portfolio",
    description:
      "My own personal portfolio, that I built to showcase the projects that I am working on, and the projects that I've finished, built with a elegant design sight using SCSS, React, Node/Express, and gsap.",
    imgs: [expressSvg, reactSvg, nodeSvg],
    link: "/",
    status: true,
  },
  {
    name: "Movies App",
    description:
      "Movies App built to solidify my react skills, using the moviedb api to fetch all the movies information",
    imgs: [mongoSvg, expressSvg, reactSvg, nodeSvg],
    link: "https://priceless-roentgen-4baadd.netlify.app",
    status: false,
  },
  // {
  //   name: "Weather App",
  //   description:
  //     "Simple weather app that shows the current weather and temps for the city that you search",
  //   imgs: [reactSvg],
  //   link: "#",
  //   status: false,
  // },
  {
    name: "Chatting Room",
    description:
      "A real time chat room, that implements sign up and login, using MERN STACK and pusher",
    imgs: [mongoSvg, expressSvg, reactSvg, nodeSvg],
    link: "https://agitated-engelbart-a2b998.netlify.app/",
    status: false,
  },
];
