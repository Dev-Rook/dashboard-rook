import styles from "../styles/comp-styles/input.module.scss";

// Material UI Import:
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Input = ({ setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <SearchIcon sx={{ color: "black" }} />
        <input
          type="text"
          className={styles.input}
          placeholder="Search via first name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <AddBoxIcon
        sx={{ color: "red", height: 35, width: 35 }}
        className={styles.addBox}
      />
    </div>
  );
};

export default Input;
