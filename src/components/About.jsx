import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";

const ServiceCard = ({ index, title, points, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-4 px-8 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[18px] font-bold text-center">
          {title}
        </h3>
        {/* <span className="text-white text-[12px]">
          {"" + points.join(", ")}
        </span> */}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who is JoeCrash?</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi there! My name is Juan. I go by JoeCrash for all things internet.
        <br />
        <br />
        I am a seasoned Full Stack Developer with over 15 years of experience
        making websites, web apps and other fun things from concept to
        completion.
        <br />
        My passion lies in backend development where I strive to write clean,
        extensible code that flows like poetry.
        <br />
        <br />
        In other pursuits I have{" "}
        <a
          className="text-[18px] blue-text-gradient"
          href="https://www.tinkercad.com/things/akkQWZzp5CX"
          target="_blank"
          rel="noreferrer"
        >
          prototyped my own 3D Printer
        </a>
        , taught STEM classes for robotics, and even managed a high volume
        kitchen!
        <br />
        <br />
        In my personal time, I work on self development{" "}
        <a
          className="text-[18px] blue-text-gradient"
          href="https://en.wikipedia.org/wiki/Kaizen"
          target="_blank"
          rel="noreferrer"
        >
          (Kaizen)
        </a>{" "}
        by improving my codecraft, learning new tech, playing piano,
        tinkering with robotics and e-biking all around NYC.
        <br />
        <br />
        If you would like to reach out for a project, have some questions or
        just need help figuring out a professional path to take, feel free to
        use the contact form below. You can also reach out via{" "}
        <a
          className="text-[18px] blue-text-gradient"
          href="https://www.linkedin.com/in/juan-medina-full-stack-developer/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        , let's connect and talk tech!
        <br />
        <br />
        Here are a few of the skills I have picked up over the years.
      </motion.p>
      <div className="mt-20 mb-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            points={service.points}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
