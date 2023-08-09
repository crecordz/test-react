import { menuLinesAbout, menuLinesProducts } from "../../utils/arrays";
import MenuItem from "../MenuItem/MenuItem";
import "./Menu.css";
import { useState } from "react";
export default function Menu() {
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);
  const [hoverContacts, setHoverContacts] = useState(false);

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

  const handleMouseEnterForContacts = () => {
    setHoverContacts(true);
  };

  const handleMouseLeaveForContacts = () => {
    setHoverContacts(false);
  };

  return (
    <div className="menu__container">
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
      <button
        className={`menu__button ${hoverContacts ? "menu__button_border" : ""}`}
        onMouseEnter={handleMouseEnterForContacts}
        onMouseLeave={handleMouseLeaveForContacts}
      >
        contacts
      </button>
    </div>
  );
}
