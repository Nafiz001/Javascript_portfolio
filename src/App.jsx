/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useState, useEffect } from "react";
import Education from "./Components/Education";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import AnimatedDivider from "./Components/AnimatedDivider";

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

  useEffect(() => {
    // Create trailing cursor
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    document.body.appendChild(trail);
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;
    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener("mousemove", move);
    let running = true;
    function animate() {
      trailX += (mouseX - trailX) * 0.22;
      trailY += (mouseY - trailY) * 0.22;
      trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
      document.removeEventListener("mousemove", move);
      if (trail.parentNode) trail.parentNode.removeChild(trail);
    };
  }, []);

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
      <Home name={siteProps.name ?? ""} title={siteProps.title ?? ""} />
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
