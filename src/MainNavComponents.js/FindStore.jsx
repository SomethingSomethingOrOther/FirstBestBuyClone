import "./FindStore.css";
import Popup from "reactjs-popup";
const FindStore = () => {
  const image = (
    <button className="container__button">
      <span>
        {" "}
        <img
          className="container__location_button__img"
          style={{ height: "2rem", width: "2rem" }}
          src="https://www.svgrepo.com/show/447815/store-open.svg"
          alt="Find Your Store"
        />
      </span>
      <span className="container__button_span">Albany</span>
    </button>
  );

  return (
    <div className="container">
      {/* <button className="container__button">
        <span>
          {" "}
          <img
            className="container__location_button__img"
            style={{ height: "2rem", width: "2rem" }}
            src="https://www.svgrepo.com/show/447815/store-open.svg"
            alt="Find Your Store"
          />
        </span>
        <span className="container__button_span">Albany</span>
  </button>*/}
      <div className="popup">
        <Popup
          trigger={image}
          contentStyle={{ border: "2px solid grey", backgroundColor: "white" }}
          position="bottom center"
        >
          <div
            className="innerDiv"
            styles={{ display: "flex", alignItems: "left" }}
          >
            <h2>Albany</h2>
            <p>
              1 crossgates Mall RD <br />
              Albany,NY 12203 <br />
            </p>
            <br />
            <p>
              <a
                href="https://https://v8qj41.csb.app/"
                target="_blank"
                rel="noreferrer"
              >
                Store Details
              </a>
            </p>
            <br />
            <p>View Store Traffic</p>
            <button className="innerDiv_button" type="button">
              Find Another Store
            </button>
          </div>
        </Popup>
      </div>
    </div>
  );
};
export default FindStore;
