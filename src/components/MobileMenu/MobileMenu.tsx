import { Canvas } from "@react-three/fiber";
import "./MobileMenu.css";
import Model from "../Model/Model";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  return (
    <>
      <Link to="/">
        <div className="mobile__button-close"></div>
      </Link>

      <div className="mobile__container">
        <button className="mobile__button mobile__button_title">about</button>
        <button className="mobile__button">mission + vision</button>
        <button className="mobile__button">who we are</button>
        <button className="mobile__button">lynx labs</button>
        <div className="mobile__line"></div>
        <button className="mobile__button mobile__button_title">
          products
        </button>
        <button className="mobile__button">evr ar</button>
        <div className="mobile__line"></div>
        <button className="mobile__button mobile__button_title mobile__button_white">
          contacts
        </button>
        <div className="main__blink_vertical"></div>
        <div className="mobile__border"></div>
        <div className="canvas-element-mobile">
          <Canvas camera={{ position: [3, 0, 0] }}>
            <Model />
          </Canvas>
        </div>
      </div>
    </>
  );
}
