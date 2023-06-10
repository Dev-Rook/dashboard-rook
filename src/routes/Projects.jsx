import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

// Firebase 🔥
import useFirebase from "../hooks/useFirebase";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/comp-styles/form.module.scss";

import Billboard from "../components/Billboard";

const Projects = () => {
  // Billboard Props:
  const title = "Projects";
  const view = "";

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
    await addDoc(projectRef, {
      name: name,
      description: description,
      image: image,
      type: type,
      demoLink: demoLink,
      githubLink: githubLink,
    }, []);
  };

  return (
    <div className="page">
      <Billboard title={title} image={view} />
      <form className={styles.form}>
        <input type="text" placeholder="name" onChange={(e) => {setName(e.target.value)}} />
        <input type="text" placeholder="deescription" onChange={(e) => {setDescription(e.target.value)}} />
        <input type="text" placeholder="image" onChange={(e) => {setImage(e.target.value)}} />
        <input type="text" placeholder="type" onChange={(e) => {setType(e.target.value)}} />
        <input type="text" placeholder="Demo Link" onChange={(e) => {setDemoLink(e.target.value)}} />
        <input type="text" placeholder="GitHub Link" onChange={(e) => {setGithubLink(e.target.value)}} />
        <button onClick={createProject}>Submit</button>
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
                <a href={item.demoLink} target="_blank" rel="noreferrer">Demo</a>
                <p>{item.githubLink}</p>
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
