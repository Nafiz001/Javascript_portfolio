/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about_me.avif";

const imageAltText = "white abstract background with a hint of color";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a passionate CSE student at KUET, driven by a goal to innovate in technology and software development.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a Computer Science and Engineering student at Khulna University of Engineering & Technology (KUET), I am deeply enthusiastic about exploring algorithms, software development, and emerging technologies. Hailing from Bogura, Bangladesh, and having completed my HSC at Notre Dame College, I aim to leverage my skills to create impactful solutions in the tech industry. My passion lies in mastering complex problems through coding and contributing to open-source projects, with a long-term goal of advancing AI and software systems. A quote that inspires me is: “The only way to do great work is to love what you do.” – Steve Jobs ";

const About = () => {
  return (
    <section className="padding" id="about" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(120deg, rgba(78,86,126,0.3), rgba(0,212,255,0.2), rgba(255,0,150,0.2))",
        }}
      />
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
