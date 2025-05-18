import React from "react";

const Education = () => {
  return (
    <section
      className="padding"
      id="education"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          background: "linear-gradient(120deg, rgba(255,215,0,0.15), rgba(0,255,127,0.15), rgba(0,212,255,0.12))"
        }}
      ></div>
      <div className="education" style={{ position: "relative", zIndex: 1 }}>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Khulna University of Engineering & Technology</strong> - Bachelor of Science in
            Computer Science
            <br />
            Graduated: June 2027
          </li>
          <li>
            <strong>Coursera</strong> - Machine Learning Specialization
            <br />
            Completed: December 2025
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
