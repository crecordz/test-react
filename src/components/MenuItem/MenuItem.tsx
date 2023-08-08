import MenuLine from "../MenuLine/MenuLine";
import "./MenuItem.css";
import { FC } from "react";
interface IMenuItem {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  hover: boolean;
  name: string;
  arrayOfLines: string[];
}

const MenuItem: FC<IMenuItem> = ({
  handleMouseEnter,
  handleMouseLeave,
  hover,
  name,
  arrayOfLines,
}) => {
  return (
    <div
      className={`menu ${hover ? "menu_droped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu__button-container">
        <button className={`menu__button ${hover ? "menu__button_red" : ""}`}>
          {name}
        </button>
        <div className={`menu__arrow ${hover ? "menu__arrow_up" : ""}`}></div>
      </div>

      <div className={`menu__sub ${hover ? "menu__sub_visible" : ""}`}>
        <div className="menu__line"></div>
        {arrayOfLines.map((item, index) => (
          <MenuLine text={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
