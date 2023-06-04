import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="container">
      <div className="container__searchbox">
        <input
          className="container__searchbox_input"
          type="text"
          placeholder="What can we help you find today?"
        />
        <button className="container__searchbox_button">
          <img
            style={{
              height: "3rem",
              width: "1.7rem",
              backgroundColor: "var(--blue)"
            }}
            src="https://www.svgrepo.com/show/505492/search.svg"
            alt="searchIcon"
          />
        </button>
      </div>
    </div>
  );
};
export default SearchBox;
