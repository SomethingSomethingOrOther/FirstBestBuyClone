import "./SubnavLinks.css";
import Popup from "reactjs-popup";

const SubNavLinks = ({ subnavlinks }) => {
  const { name, fontWeight, icon } = subnavlinks;
  return (
    <div className="container">
      <button
        style={{
          fontWeight: fontWeight,
          color: "white",
          backgroundColor: "var(--blue)",
          border: "none"
        }}
      >
        {name}
        <span>
          <button style={{}}>
            {icon ? (
              <Popup
                trigger={
                  <img
                    style={{ height: "0.7rem", width: "0.7rem" }}
                    src={icon}
                    alt="arrow down"
                  />
                }
                position="bottom center"
              >
                {name === "Account" ? (
                  <>
                    <p>
                      My Best Buy® members get free shipping with no <br />
                      minimum purchase. Plus, exclusive offers and more
                    </p>
                    <button type="button">Sign In</button>
                    <button type="button">Create Account</button>
                  </>
                ) : null}
                {name === "Recently Viewed" ? (
                  <>
                    <h2>Recently Viewed</h2>
                  </>
                ) : null}
                {name === "Order Status" ? <h2>Order Status</h2> : null}
                {name === "Saved Items" ? <h2>Saved Items</h2> : null}
              </Popup>
            ) : null}
          </button>
        </span>
      </button>
    </div>
  );
};

export default SubNavLinks;
