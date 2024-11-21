import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "10px", textAlign: "center" }}>
      <nav>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>
          Contact
        </Link>
        <Link to="/todolist" style={{ margin: "0 10px" }}>
          TodoList
        </Link>
      </nav>
    </header>
  );
};

export default Header;
