import { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import styles from "../styles/sec-styles/grid.module.scss";

// Json Import:
import work from "../data/work.json";

import StartIcon from "@mui/icons-material/Start";

const Categories = () => {
  const [data, setData] = useState(work);
  const { scrollUp } = useScrollUp();
  return (
    <div className={"section"} id="work">
      <p className={"title"}>Categories</p>

      <div className={styles.contentCotainer}>
        {data?.map((value) => {
          return (
            <Link to={value.link} key={value.id}>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={value.preview} alt="" className={styles.img} />
                </div>
                {/* <div className={styles.titleContainer}>
                  <p className={styles.title}>{value.title}</p>
                  <a href={value.link} target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"
                      />
                    </svg>
                  </a>
                </div>
                <p className={styles.description}>{value.description}</p> */}
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
    </div>
  )
}

export default Categories