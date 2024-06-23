import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLogged } from "../../store/selectors";

function RequireAuth({ children }) {
  const location = useLocation();
  //const { isLogged } = useAuth();
  const isLogged = useSelector(getIsLogged);

  return isLogged ? (
    children
  ) : (
    <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
  );
}

export default RequireAuth;
