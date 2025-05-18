/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/about_me.avif";

const imageAltText = "Whitish abstract background with a hint of color";

const Home = ({ name, title }) => {
  return (
    <section
      id="home"
      className="min-height"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flex: "0 0 auto",
          margin: "4vw 0 0 4vw",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require("../images/IMG_20231015_191152_409.jpg")}
          alt="Myself"
          style={{
            width: "32vw",
            maxWidth: "180px",
            minWidth: "120px",
            height: "32vw",
            maxHeight: "180px",
            minHeight: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 24px rgba(78,86,126,0.18)",
            border: "4px solid #fff",
            background: "#eee",
          }}
        />
      </div>
      <div
        style={{
          flex: "1 1 240px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "3vw 4vw 0 3vw",
          zIndex: 2,
          minWidth: "200px",
        }}
      >
        <h1
          style={{
            fontSize: "7vw",
            minFontSize: "2rem",
            maxWidth: "90vw",
            wordBreak: "break-word",
          }}
        >
          {name}
        </h1>
        <h2
          style={{
            fontSize: "4vw",
            minFontSize: "1.2rem",
            maxWidth: "90vw",
            wordBreak: "break-word",
          }}
        >
          {title}
        </h2>
      </div>
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
        alt=""
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
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          zIndex: 2,
          transform: "translateX(-50%)",
        }}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
