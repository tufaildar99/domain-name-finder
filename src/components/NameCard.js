import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

function NameCard({ name }) {
  return (
    <a target="_blank" rel="noreferrer" href={`${nameCheapUrl}${name}`}>
      <div className="result-name-card">
        <p className="result-name">{name}</p>
      </div>
    </a>
  );
}

export default NameCard;
