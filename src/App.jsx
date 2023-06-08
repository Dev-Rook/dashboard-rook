import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Hooks Import:
import useScrollUp from "./hooks/useScrollUp.jsx";

// Context Import:
import { LoginContext } from "./context/LoginContext.js";

// Styles Import:
import styles from "./app.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

// Components Import:

// Routes Import:
import Index from "./routes/Index";
import Projects from "./routes/Projects";
import Posts from "./routes/Posts";
import Experience from "./routes/Experience";
import Skills from "./routes/Skills";
import Tasks from "./routes/Tasks";
import Login from "./routes/Login";
import Error from "./routes/Error";

// Dynamic Routes:

function App() {
  const { scrollUp, backToTop } = useScrollUp();

  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className={styles.app}>
      <LoginContext.Provider value={{ isAuth, setIsAuth }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/xp" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <NavigationIcon
            onClick={scrollUp}
            sx={{ fontSize: 30, color: "white" }}
            className={`${styles.Back_To_Top_Icon} ${
              backToTop ? styles.Show_Back_To_Top : ""
            }`}
          />
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
