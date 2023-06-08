import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import styles from "../styles/sec-styles/grid.module.scss";
import Lstyles from "../styles/comp-styles/errorLabel.module.scss";

// Component Import:
import LoginLabel from "../components/LoginLabel";

// Json Import:
import categories from "../data/categories.json";

import StartIcon from "@mui/icons-material/Start";

const Categories = () => {
  const { singIn, isAuth, setIsAuth } = useContext(LoginContext);

  const [data, setData] = useState(categories);
  const { scrollUp } = useScrollUp();
  return (
    <div className={"section"} id="work">
      <p className={"title"}>Categories</p>

      {isAuth ? (
        <>
          <div className={styles.contentCotainer}>
            {data?.map((value) => {
              return (
                <Link to={value.route} key={value.id}>
                  <div className={styles.card}>
                    <div className={styles.imgContainer}>
                      <img src={value.img} alt="" className={styles.img} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <br />
          <br />
          <div className={"callToActionBox"}>
            <Link to={"/projects"} onClick={scrollUp}>
              <button className={"viewButton"}>Vew All</button>
            </Link>
            <StartIcon sx={{ color: "white", fontSize: 25 }} />
          </div>
        </>
      ) : (
        <div className={Lstyles.Content_Container}>
          <h1 className={Lstyles.Title}>Login</h1>
          <h3 className={Lstyles.Subtitle}>Login to access dashboard</h3>
        </div>
      )}
    </div>
  );
};

export default Categories;
