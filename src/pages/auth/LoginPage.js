import { login } from "../service";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authLoginFulfilled,
  authLoginPending,
  authLoginRejected,
  uiResetError,
} from "../../store/actions";
import { getUi } from "../../store/selectors";
import { UI_RESET_ERROR } from "../../store/types";

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { pending, error } = useSelector(getUi);

  const [checkValue, setCheckValue] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(authLoginPending());
      await login(formValues, checkValue);
      dispatch(authLoginFulfilled());
      const to = location.state?.from || "/auth/login";
      navigate(to, { replace: true });
    } catch (error) {
      dispatch(authLoginRejected(error));
    }
  };

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckBox = (event) => {
    setCheckValue(event.target.checked);
  };

  const { email, password } = formValues;
  const buttonDisabled = !email || !password || pending;

  const resetError = () => {
    dispatch(uiResetError());
  };

  return (
    <div>
      <h1>Log in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox"
            value="checkbox"
            onChange={handleCheckBox}
          ></input>
          <label>Keep accesToken for next session</label>
        </div>
        <Button type="submit" disabled={buttonDisabled}>
          Login
        </Button>
      </form>
      {error && (
        <div className="loginPage-error" onclick={resetError}>
          {error.message}
        </div>
      )}
    </div>
  );
}
