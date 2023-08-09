import { useState } from "react";
import "./Founders.css";

export default function Founders() {
  const [speedOfTubesDick, setSpeedOfTubesDick] = useState(2.5);
  const [hoverDick, setHoverDick] = useState(false);
  const [speedOfTubesDepp, setSpeedOfTubesDepp] = useState(2.5);
  const [hoverDepp, setHoverDepp] = useState(false);
  const numTubes = 8;
  const tubes = Array.from({ length: numTubes }, () => ({
    delay: `${Math.random() * 2}s`,
  }));

  const handleMouseEnterDick = () => {
    setSpeedOfTubesDick(1);
    setHoverDick(true);
  };

  const handleMouseLeaveDick = () => {
    setSpeedOfTubesDick(2.5);
    setHoverDick(false);
  };

  const handleMouseEnterDepp = () => {
    setSpeedOfTubesDepp(1);
    setHoverDepp(true);
  };

  const handleMouseLeaveDepp = () => {
    setSpeedOfTubesDepp(2.5);
    setHoverDepp(false);
  };
  return (
    <>
      <div className="founders__block-one">
        <div className="founders__block-two"></div>
        <div className="main__blink"></div>
      </div>
      <div className="founders__container">
        <div
          className="founders__dick"
          onMouseEnter={handleMouseEnterDick}
          onMouseLeave={handleMouseLeaveDick}
        >
          <div className="main__blink_vertical"></div>
          <div className="founders__dick_dark"></div>
          <div className="founders__dick_light"></div>
          <h2
            className={`founders__name ${
              hoverDick ? "founders__name_red" : ""
            }`}
          >
            Bald Dick
          </h2>

          <p className="founders__job">
            <em className="founders__underscore">founder</em>
          </p>

          {tubes.map((tube, index) => (
            <div
              key={index}
              className="founders__flying-tube"
              style={{
                left: `${Math.random() * 90}%`, // Random left offset between 0% and 80%
                animation: `move3 ${speedOfTubesDick}s linear ${tube.delay} infinite`,
              }}
            ></div>
          ))}
          <p className="founders__paragraph">
            “We will see a whole new generation of artists born in the
            metaverse. Over the next decade this technology will become part of
            every release, ticketing, merchandise and fan club strategy.
          </p>
        </div>
        <div
          className="founders__depp"
          onMouseEnter={handleMouseEnterDepp}
          onMouseLeave={handleMouseLeaveDepp}
        >
          <div className="founders__depp_dark"></div>
          <div className="founders__depp_light"></div>
          <h2
            className={`founders__name padding ${
              hoverDepp ? "founders__name_red" : ""
            }`}
          >
            John Depp
          </h2>
          <p className="founders__job padding">
            <em className="founders__underscore">founder</em>
          </p>
          {tubes.map((tube, index) => (
            <div
              key={index}
              className="founders__flying-tube"
              style={{
                left: `${Math.random() * 90}%`, // Random left offset between 0% and 80%
                animation: `move3 ${speedOfTubesDepp}s linear ${tube.delay} infinite`,
              }}
            ></div>
          ))}
          <p className="founders__paragraph">
            “Ignoring this new medium is like being late to e-commerce or social
            media. The metaverse is coming; embrace it and re-imagine what it
            means to connect with your fans.”
          </p>
        </div>
      </div>
    </>
  );
}
