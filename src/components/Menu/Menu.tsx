import { menuLinesAbout, menuLinesProducts } from "../../utils/arrays";
import MenuItem from "../MenuItem/MenuItem";
import "./Menu.css";
import { useState } from "react";
export default function Menu() {
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  const handleMouseEnterForAbout = () => {
    setHoverAbout(true);
  };

  const handleMouseLeaveForAbout = () => {
    setHoverAbout(false);
  };

  const handleMouseEnterForProducts = () => {
    setHoverProducts(true);
  };

  const handleMouseLeaveForProducts = () => {
    setHoverProducts(false);
  };

  return (
    <>
      <MenuItem
        handleMouseEnter={handleMouseEnterForAbout}
        handleMouseLeave={handleMouseLeaveForAbout}
        hover={hoverAbout}
        name="about"
        arrayOfLines={menuLinesAbout}
      />
      <MenuItem
        handleMouseEnter={handleMouseEnterForProducts}
        handleMouseLeave={handleMouseLeaveForProducts}
        hover={hoverProducts}
        name="products"
        arrayOfLines={menuLinesProducts}
      />
    </>
  );
}
