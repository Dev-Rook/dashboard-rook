import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Hooks Import:
import useScrollUp from "./hooks/useScrollUp.jsx";

import {auth, provider} from "./firebase/firebase"
import { signInWithPopup } from "firebase/auth";

// Context Import:
import { LoginContext } from "./context/LoginContext.js";

// Styles Import:
import styles from "./app.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

// Components Import:
import Sidebar from "./components/Sidebar";
import Right from "./components/Right";

// Routes Import:
import Index from "./routes/Index";
import Login from "./routes/Login";
import Error from "./routes/Error";

// Dynamic Routes:

function App() {
  const { scrollUp, backToTop } = useScrollUp();

  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className={styles.app}>
      <LoginContext.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Index />} />
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
