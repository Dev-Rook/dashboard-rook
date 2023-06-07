// Styles Import:
import styles from "../styles/comp-styles/billboard.module.scss";

const Billboard = () => {
  return (
    <div className={styles.billboard}>
      <img src="" alt="" className={styles.img} />
      <div className={styles.diffuser}></div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Dash Rook</h1>
      </div>
    </div>
  );
};

export default Billboard;
