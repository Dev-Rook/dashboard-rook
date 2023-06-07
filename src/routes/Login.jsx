import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

import "../styles/global.scss";

import LoginLabel from "../components/LoginLabel";

const Login = () => {
  const {singIn, setIsAuth} = useContext(LoginContext);

  return (
    <div className={"utilityPage"}>
      <LoginLabel singIn={singIn} setIsAuth={setIsAuth} />
    </div>
  );
};

export default Login;
