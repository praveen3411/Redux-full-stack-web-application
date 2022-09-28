import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "5px",
        border: "2px solid black",
        fontWeight: "bold",
        color: "black"
      }}
    >
      <Link to={"/books"}>BOOKS</Link>
      <Link to={"/login"}>LOGIN</Link>
    </div>
  );
}
