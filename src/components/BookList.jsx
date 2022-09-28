import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { appReducer } from "../redux/app/app.actions";
import BookCard from "./BookCard";
export default function BookList() {
  const books = useSelector((store) => store.apps.data);
  const [searchParms] = useSearchParams();
  let dispatch = useDispatch();
  const loacoation = useLocation();
  useEffect(() => {
    let sorting = searchParms.get("sorting");
    let getthedata = {
      params: {
        category: searchParms.getAll("category"),
        _sort: sorting && "release_year",
        _order: sorting,
      },
    };
    dispatch(appReducer(getthedata));
  }, [loacoation.search]);
  return (
    <div>
      {books.length > 0 &&
        books.map((item) => <BookCard key={item.id} senddata={item} />)}
    </div>
  );
}
