import "./SearchBox.css";

function SearchBox({ handleInputChange }) {
  return (
    <div className="SearchBox">
      <input type="text" onChange={(e) => handleInputChange(e.target.value)} />
    </div>
  );
}

export default SearchBox;
