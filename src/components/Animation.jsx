import { useState, useEffect } from "react";
import gengarGif from "../assets/img/gengar.gif";

export const Gengar = () => {
  const [position, setPosition] = useState(0);
  const [animationStopped, setAnimationSteopped] = useState(false);

  useEffect(() => {
    let animationInterval;
    if (!animationStopped) {
      animationInterval = setInterval(() => {
        setPosition((prevPosition) => {
          if (prevPosition >= 50) {
            return 0;
          } else {
            return prevPosition + 5;
          }
        });
      }, 100);
    }

    return () => {
      clearInterval(animationInterval);
    };
  }, [animationStopped]);

  const gifStyle = {
    width: "120px",
    height: "120px",
    transform: `translateX(${position}px)`,
    transition: "transform 5s linear",
  };

  return (
    <div className="pokemon-character">
      <img src={gengarGif} alt="Pokemon Character" style={gifStyle} />
    </div>
  );
};
