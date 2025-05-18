import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Typing = ({ text = "", speed = 80, className = "" }) => {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);

  useEffect(() => {
    setDisplayed("");
    i.current = 0;
    if (!text) return;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i.current]);
      i.current++;
      if (i.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};

Typing.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
  className: PropTypes.string,
};

export default Typing;
