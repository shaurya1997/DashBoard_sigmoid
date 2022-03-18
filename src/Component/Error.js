import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const handleClick = () => {
    if (
      localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token") ||
      user
    ) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <Button onClick={handleClick}>Back To Main Page</Button>
      <h1 className="error_msg">Page Not Found 404 !</h1>
    </>
  );
};
export default ErrorPage;
