import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

// Styles Import:
import styles from "../styles/comp-styles/nav.module.scss";

// Json Import:
import routes from "../data/routes.json";

const Head = () => {
  const { singIn, isAuth, setIsAuth } = useContext(LoginContext);
  const [data, setData] = useState(routes);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {!isAuth ? (
          <ul className={styles.navlinkContainer}>
            {data?.slice(5, 6).map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.route} className={styles.link}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className={styles.navlinkContainer}>
            {data?.slice(0, 5).map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.route} className={styles.link}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <p onClick={signUserOut} className={styles.link}>Logout</p>
          </ul>
        )}
        <Link>
          <div className={styles.imgContainer}>
            <img src="" alt="" className={styles.img} />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Head;
