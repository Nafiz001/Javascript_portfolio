/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useState } from "react";
import Education from "./Components/Education";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import AnimatedDivider from "./Components/AnimatedDivider";
import Typing from "./Components/Typing";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Md. Nafiz Ahmed",
  title: "Computer Science Student",
  email: "nafizahmed000@gmail.com",
  gitHub: "Nafiz001",
  instagram: "nafiz_ahmed/",
  linkedIn: "nafiz-ahmed-770a3a273/",
  twitter: "Nafizahmed000",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  // Dark/light mode toggle
  const [dark, setDark] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setDark((d) => !d);
    document.body.classList.toggle("dark-mode", !dark);
  };

  return (
    <div id="main">
      <Header />
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 2000,
          background: dark ? "#222" : "#fff",
          color: dark ? "#fff" : "#222",
          border: "1px solid #4E567E",
          borderRadius: "50%",
          width: 44,
          height: 44,
          fontSize: 22,
          cursor: "pointer",
          boxShadow: "0 2px 8px #0002",
        }}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        {dark ? "☀️" : "🌙"}
      </button>
      <Home
        name={<Typing key={siteProps.name} text={siteProps.name || ""} speed={80} />}
        title={<Typing key={siteProps.title} text={siteProps.title || ""} speed={60} />}
      />
      <AnimatedDivider />
      <About />
      <AnimatedDivider />
      <Education />
      <AnimatedDivider />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
