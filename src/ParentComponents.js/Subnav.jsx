import "./Subnav.css";
import { subNavLinks } from "../data.js/SubnavData";
import List from "../SubnavComponents.js/List";
import SubNavLinks from "../SubnavComponents.js/SubNavLinks";

const Subnav = () => {
  return (
    <div className="container">
      <>
        <List
          items={subNavLinks}
          resourceName="subnavlinks"
          itemComponent={SubNavLinks}
        />
      </>
    </div>
  );
};
export default Subnav;
