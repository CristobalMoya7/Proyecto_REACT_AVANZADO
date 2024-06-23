import { Button } from "./Button";
import { logout } from "../pages/service";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsLogged } from "../store/selectors";
import { authLogout } from "../store/actions";

function AuthButton({ className }) {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout();
    dispatch(authLogout());
  };

  return isLogged ? (
    <Button onClick={handleLogout} className={className}>
      Logout
    </Button>
  ) : (
    <Button className={className} as={Link} to="/auth/login">
      Login
    </Button>
  );
}

export default AuthButton;
