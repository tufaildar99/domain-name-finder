import "./Header.css";

function Header({ headerExpanded }) {
  return (
    <header className={headerExpanded ? "headerExpand" : "headerShrink"}>
      Just Name It
    </header>
  );
}

export default Header;
