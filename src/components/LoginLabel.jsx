import { Link, useNavigate } from "react-router-dom";
import "../styles/global.scss";
import styles from "../styles/comp-styles/errorLabel.module.scss";

import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

import StartIcon from "@mui/icons-material/Start";

const LoginLabel = ({ setIsAuth }) => {
  let navigate = useNavigate()
  const singIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/")
    });
  };
  return (
    <div className={"section"}>
      <div className={styles.Content_Container}>
        <h1 className={styles.Title}>Login</h1>
        <h3 className={styles.Subtitle}>Login to access dashboard</h3>
        <p className={styles.Text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          excepturi vero omnis asperiores natus temporibus nesciunt quisquam
          commodi, et consectetur?
        </p>
        <div className={styles.CallToActionBox}>
          <button onClick={singIn} className={styles.View_Button}>
            Login
          </button>
          <Link to={"/"}></Link>
          <StartIcon sx={{ color: "white", fontSize: 25 }} />
        </div>
      </div>
    </div>
  );
};

export default LoginLabel;
