import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="header-h1">Kor/Eng notes</h1>
      </Link>
    </header>
  );
}
