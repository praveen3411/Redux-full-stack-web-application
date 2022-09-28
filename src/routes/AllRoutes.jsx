import { Route, Routes } from "react-router-dom";
import RequriedAuth from "../hoc/RequriedAuth";
import Books from "../pages/Books";
import EditBook from "../pages/EditBook";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import PageNotFound from "../pages/PageNotfound";
import SingleBook from "../pages/SingleBook";
import Navbar from "./Navbar";

export default function AllRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route
          path="/books/:id/edit"
          element={
            <RequriedAuth>
              <EditBook />
            </RequriedAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
