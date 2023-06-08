import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import styles from "../styles/sec-styles/tasks.module.scss";
import Lstyles from "../styles/comp-styles/errorLabel.module.scss";
// Json Import:
import tasks from "../data/tasks.json";

// Material UI Timeline Imports Start
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// Material UI Timeline Imports End

import LaunchIcon from "@mui/icons-material/Launch";

// Component Import:
import LoginLabel from "../components/LoginLabel";

const Tasks = () => {
  const { singIn, isAuth, setIsAuth } = useContext(LoginContext);
  const [data, setData] = useState(tasks);
  const { scrollUp } = useScrollUp();
  return (
    <div className={"section"}>
      <p className={"title"}>Tasks</p>
      {isAuth ? (
        <>
          {data?.slice(0, 3).map((value) => {
            return (
              <Timeline
                className={`${styles.Timeline}`}
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
                key={value.id}
              >
                <TimelineItem className={styles.Timeline_Item}>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className={styles.Time_Card}>
                    <span>
                      <p className={styles.Year}>{value.year}</p>
                      <p className={styles.Title}>{value.title}</p>
                      <a
                        href={value.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={scrollUp}
                      >
                        <LaunchIcon sx={{ color: "red" }} />
                      </a>
                    </span>
                    <p className={styles.Description}>{value.description}</p>
                    {!data?.category ? (
                      <p className={styles.Type}>{value.category}</p>
                    ) : null}
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            );
          })}
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

export default Tasks;
