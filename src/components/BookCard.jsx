import { Link } from "react-router-dom";

export default function BookCard({ senddata }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        border: "2px solid black",
        borderRadius: "5px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <div>
        <img
          style={{ borderRadius: "5px" }}
          width="200px"
          height="200px"
          src={
            "https://media.istockphoto.com/photos/young-mother-reading-books-to-lovely-little-son-in-library-picture-id1411543865?b=1&k=20&m=1411543865&s=170667a&w=0&h=P7PFUetPsh2hG4VLlNDatzf37i3cKm_eduf_NYwcWvQ="
          }
          alt="cartitems"
        />
      </div>
      <div>
        <h2>{senddata.book_name.substring(0, 20)}</h2>
        <h2>{senddata.category}</h2>
        <h3>${senddata.release_year}</h3>
        <h4>💫{senddata.author}</h4>
        <Link to={`/books/${senddata.id}/edit`}>
          <button
            style={{
              padding: "5px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            EDIT
          </button>
        </Link>
      </div>
    </div>
  );
}
