import { Cart, Logo, SearchBox, Menu, FindStore } from "../NavImports";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <Logo />
      <Menu />
      <SearchBox />
      <FindStore />
      <Cart />
    </div>
  );
};
export default NavBar;
