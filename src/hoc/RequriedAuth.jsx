import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function RequriedAuth({ children }) {
  let authdata = useSelector((store) => store.auth.isSucccess);
  let location = useLocation();

  if (!authdata) {
    return (
      <Navigate to={"/login"} replace state={{ data: location.pathname }} />
    );
  }
  return children;
}
