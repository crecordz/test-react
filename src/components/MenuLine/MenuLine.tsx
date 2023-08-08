import "./MenuLine.css";
import { FC } from "react";

interface IMenuLine {
  text: string;
}

const MenuLine: FC<IMenuLine> = ({ text }) => {
  return <button className="menu__button-item">{text}</button>;
};

export default MenuLine;
