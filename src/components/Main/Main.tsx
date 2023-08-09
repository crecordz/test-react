import { Canvas } from "@react-three/fiber";
import "./Main.css";
import Model from "../Model/Model";

export default function Main() {
  return (
    <div className="main">
      <div className="main__block-one">
        <div className="main__block-two"></div>
        <div className="main__block-three"></div>
        <div className="main__blink"></div>
      </div>
      <div className="main__container-line">
        <div className="main__container">
          <div className="main__info">
            <div className="main__blink_vertical"></div>
            <h1 className="main__title">
              EVR <br /> Interactive Music Ecosystem
            </h1>
            <p className="main__subtitle">
              EVR was founded by
              <em className="main__underscore">John Depp</em>
              and <em className="main__underscore">Steven Wolfe</em> aka
              <em className="main__underscore">Bald Dick</em>, along with memsic
              and gaming indemstry heavyweights
              <em className="main__underscore">Ber Kemtner</em>,
              <em className="main__underscore">Dion Wicbon</em> and metaverse
              visionary, <em className="main__underscore">Art Memvers</em>.
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
            <directionalLight intensity={20} position={[0, 4, -2]} />
            <pointLight position={[3, -4, -2]} intensity={20} />

            <Model />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
