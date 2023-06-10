import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

// Firebase 🔥
import useFirebase from "../hooks/useFirebase";
import { db } from "../firebase/firebase";
import { addDoc, collection, deleteDoc } from "firebase/firestore";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/comp-styles/form.module.scss";

import useScrollUp from "../hooks/useScrollUp";

import Billboard from "../components/Billboard";

const Projects = () => {
  // Billboard Props:
  const title = "Projects";
  const view = "";

  const { scrollUp } = useScrollUp();

  const { isAuth } = useContext(LoginContext);
  const { data, loading, error } = useFirebase();
  const projectRef = collection(db, `projects`);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const createProject = async () => {
    await addDoc(
      projectRef,
      {
        name: name,
        description: description,
        image: image,
        type: type,
        demoLink: demoLink,
        githubLink: githubLink,
      },
      []
    );
  };

  const deleteProject = async (id) => {
    const projectDoc = collection(db, `projects`, id);
    await deleteDoc(projectDoc);
  };

  return (
    <div className="page">
      <Billboard title={title} image={view} />
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          required
          className={styles.input}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Image Link"
          className={styles.input}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Type"
          required
          className={styles.input}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Demo Link"
          required
          className={styles.input}
          onChange={(e) => {
            setDemoLink(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="GitHub Link"
          required
          className={styles.input}
          onChange={(e) => {
            setGithubLink(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Description"
          required
          className={styles.input}
          cols="30"
          rows="10"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <div className={"callToActionBox"}>
          <button onClick={createProject} className={"viewButton"}>
            Submit
          </button>
        </div>
      </form>
      {isAuth ? (
        <div className={styles.contentContaner}>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
                {/* <img src={item.image} alt="" /> */}
                <p>{item.description}</p>
                <p>{item.type}</p>
                <a href={item.demoLink} target="_blank" rel="noreferrer">
                  Demo
                </a>
                <p>{item.githubLink}</p>
                <button
                  onClick={() => {
                    deleteProject(item.id);
                  }}
                >
                  Delete Project
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Login</p>
      )}
    </div>
  );
};

export default Projects;
