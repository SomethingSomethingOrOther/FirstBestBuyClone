import { useState } from "react";

const MenuItem = ({ menuList }) => {
  const { name } = menuList;
  return (
    <div
      className="container"
      style={{
        border: "none",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <button style={{ border: "none", backgroundColor: "white" }}>
        {name}
      </button>
      <span>
        <img
          style={{ width: "0.8rem", height: "0.7rem" }}
          src="https://www.svgrepo.com/show/511422/arrow-right-336.svg"
          alt="arrow-icon"
        />
      </span>
    </div>
  );
};
const OtherMenuItem = ({ otherMenuItems }) => {
  const { name } = otherMenuItems;
  return (
    <div
      className="container"
      style={{
        border: "none",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <p>{name}</p>
      <span>
        <img
          style={{ width: "0.8rem", height: "0.7rem" }}
          src="https://www.svgrepo.com/show/511422/arrow-right-336.svg"
          alt="arrow-icon"
        />
      </span>
    </div>
  );
};

const MenuItemList = ({
  textList,
  resourceName,
  menuItemComponent: MenuItemComponent
}) => {
  return (
    <>
      {textList.map((text, i) => (
        <>
          <MenuItemComponent key={i} {...{ [resourceName]: text }} />
          <div style={{ borderBottom: "1px solid grey" }}></div>
        </>
      ))}
    </>
  );
};
export { MenuItem, MenuItemList, OtherMenuItem };
