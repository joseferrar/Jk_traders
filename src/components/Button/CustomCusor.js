import React, { useEffect, useState } from "react";

const MagicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [outerStyle, setOuterStyle] = useState({});
  const [innerStyle, setInnerStyle] = useState({});
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      setMousePosition({ x: clientX, y: clientY });

      setOuterStyle({
        transform: `translate(${clientX - 20}px, ${clientY - 20}px)`,
      });

      setInnerStyle({
        transform: `translate(${clientX - 5}px, ${clientY - 5}px)`,
      });
    };

    const handleHover = (event) => setHovered(true);
    const handleHoverOut = (event) => setHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mouseout", handleHoverOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mouseout", handleHoverOut);
    };
  }, []);

  return (
    <>
      <div
        className={`magic-cursor-outer ${hovered ? "hovered" : ""}`}
        style={outerStyle}
      ></div>
      <div
        className={`magic-cursor-inner ${hovered ? "hovered" : ""}`}
        style={innerStyle}
      ></div>
    </>
  );
};

export default MagicCursor;
