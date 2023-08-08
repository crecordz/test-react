import { Canvas } from "@react-three/fiber";
import "./Main.css";
import Model from "../Model/Model";

export default function Main() {
  return (
    <div className="main">
      <div className="main__block-one">
        <div className="main__block-two"></div>
        <div className="main__block-three"></div>
      </div>
      <div className="main__container-line">
        <div className="main__container">
          <div className="main__info">
            <h1 className="main__title">
              EVR <br /> Interactive Music Ecosystem
            </h1>
            <p className="main__subtitle">
              EVR was founded by John Depp and Steven Wolfe aka Bald Dick, along
              with music and gaming industry heavyweights Ber Kutner, Dion
              Wicbon and metaverse visionary, Art Muvers.
            </p>
          </div>
          <div className="main__info main__info_add">
            <p className="main__subtitle">
              We believe the metaverse will unlock new formats of music
              consumption that have the potential to transform the industry and
              open new revenue streams for artists.
            </p>
          </div>
        </div>

        <div className="canvas-element">
          <Canvas camera={{ position: [3, 0, 0] }}>
            <directionalLight intensity={2} position={[0, 5, -2]} />

            <Model />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
