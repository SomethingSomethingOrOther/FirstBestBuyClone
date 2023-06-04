import NavBar from "./ParentComponents.js/NavBar";
import "./styles.css";
import Subnav from "../src/ParentComponents.js/Subnav";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="subnav">
        <Subnav />
      </div>
      <div className="hero">
        <div className="text">
          <h1>Great deals</h1>
          <h3>happening now.</h3>
        </div>
      </div>
      <div className="topdeals">
        <div
          style={{
            transform: "skew(-35deg)",
            padding: "1rem",
            color: "white",
            backgroundColor: "red",
            marginLeft: "3rem",
            marginRight: "2rem"
          }}
        >
          <h1>Top Deals</h1>
        </div>
        <p>Today’s featured deals and top tech. Valid through 6/4/23.</p>
      </div>
    </div>
  );
}
