import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ResultContainer from "./components/ResultContainer";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

function App() {
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  function handleInputChange(text) {
    setHeaderExpanded(!text.length > 0);
    setSuggestedNames(text.length > 0 ? name(text) : []);
  }

  return (
    <div className="App">
      <Header headerExpanded={headerExpanded} />
      <SearchBox handleInputChange={handleInputChange} />
      <ResultContainer suggestedNames={suggestedNames} />
    </div>
  );
}

export default App;
