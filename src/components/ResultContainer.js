import "./ResultContainer.css";
import NameCard from "./NameCard";

function ResultContainer({ suggestedNames }) {
  return (
    <div className="result-container">
      {suggestedNames.map((name) => (
        <NameCard name={name} />
      ))}
    </div>
  );
}

export default ResultContainer;
