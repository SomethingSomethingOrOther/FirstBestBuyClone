import "./Menu.css";
import { useState } from "react";
import {
  MenuItem,
  MenuItemList,
  OtherMenuItem
} from "../ComponentLogic.js/MenuLogic";
import menuTextList from "../data.js/MenuData";
import { textListBelowMenuTextList } from "../data.js/MenuData";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  ///variables
  const hamburgerMenuIcon =
    "https://www.svgrepo.com/show/505933/menu-hamburger.svg";
  const closeButton = "https://www.svgrepo.com/show/380138/x-close-delete.svg";

  ///Event Handlers
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container">
      <button onClick={handleShowMenu} className="container__button">
        <span className="container__button__spanImg">
          {" "}
          <img
            className="container__button__img"
            style={{ height: "3rem", width: "3rem" }}
            src={showMenu ? closeButton : hamburgerMenuIcon}
            alt="icon"
          />
        </span>
        <span className="container__button__span_menuName">Menu</span>
      </button>
      <div
        className="container__menu"
        style={{ display: showMenu ? "block" : "none" }}
      >
        <MenuItemList
          resourceName="menuList"
          textList={menuTextList}
          menuItemComponent={MenuItem}
        />
        <div style={{ border: "3px solid grey" }}></div>

        <div className="container__menu1">
          <MenuItemList
            resourceName="otherMenuItems"
            textList={textListBelowMenuTextList}
            menuItemComponent={OtherMenuItem}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setShowMenu(false);
            }}
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
              height: "2rem"
            }}
          >
            X Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default Menu;
