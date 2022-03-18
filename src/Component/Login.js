import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/Action/UserAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (
      data ||
      localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token")
    )
      navigate("/dashboard");
  }, [data]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user.email, user.password, rememberMe));
  };

  return (
    <>
      <h1 className="login-heading">Login</h1>
      <div className="App">
        <form className="form" autoComplete="off">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className="form-input"
            onChange={handleChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            className="form-input"
            onChange={handleChange}
          />
          <div className="checkbox">
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <Typography className="remember">Remember Me</Typography>
          </div>
          <Button
            type="submit"
            variant="contained"
            disabled={isLoading || !user.email || !user.password}
            onClick={handleSubmit}
          >
            Log in
          </Button>
        </form>
      </div>
    </>
  );
};
export default Login;
