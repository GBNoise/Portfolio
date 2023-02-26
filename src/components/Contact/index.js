import Reactm, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { gsap } from "gsap";
import axios from "../../axios";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const [contactInfo, setContactInfo] = useState({ email: "", body: "" });

  const formRef = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "45%",
          end: "75%",
          scrub: true,
        },
      })
      .from(formRef.current, {
        delay: 1,
        duration: 10,
        x: 3000,
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, body } = contactInfo;
    axios
      .post("/mail", { email, body })
      .then((res) => console.log("email sent"))
      .catch((e) => console.log(e));

    setContactInfo({ email: "", body: "" });
  };

  return (
    <section className="contact" id="fourth">
      <form className="contactContainer" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="email"
          className="emailInput"
          placeholder="YOUR EMAIL"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
        />
        <textarea
          className="emailBody"
          placeholder="EMAIL CONTENT HERE"
          name="body"
          value={contactInfo.body}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="sendBtn">
          SEND
        </button>
      </form>
    </section>
  );
};
