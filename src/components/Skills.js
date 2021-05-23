import {
  Button,
  Container,
  LinearProgress,
  Paper,
  Typography,
} from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const SkillsData = [
  {
    id: "skill_1",
    skill: "HTML5",
    percentage: "95",
    icon: <FaHtml5 size="40px" color="orange" />,
    motionTime: 0.5,
  },
  {
    id: "skill_2",
    skill: "CSS3",
    percentage: "85",
    icon: <FaCss3 size="40px" color="orange" />,
    motionTime: 1,
  },
  {
    id: "skill_3",
    skill: "Java Script",
    percentage: "80",
    icon: <FaJs size="40px" color="orange" />,
    motionTime: 1.5,
  },
  {
    id: "skill_4",
    skill: "React JS",
    percentage: "80",
    icon: <FaReact size="40px" color="orange" />,
    motionTime: 2,
  },
  {
    id: "skill_5",
    skill: "Firebase",
    percentage: "80",
    icon: <SiFirebase size="40px" color="orange" />,
    motionTime: 2.5,
  },
  {
    id: "skill_6",
    skill: "Github",
    percentage: "90",
    icon: <FaGithub size="40px" color="orange" />,
    motionTime: 3,
  },
];
const Skills = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    SkillsData?.map((skill) => {
      return inView
        ? animation.start({
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
              stiffness: 100,
              type: "spring",
              delay: skill.motionTime,
              bounce: 0.5,
            },
          })
        : animation.start({
            y: -50,
            opacity: 0,
          });
    });
  }, [animation, inView]);

  return (
    <div style={{ minHeight: "100vh" }} ref={ref}>
      <Container>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            marginTop: "5vh",
            marginBottom: "2vh",
          }}
          id="skills"
        >
          <Button
            disableRipple
            disableTouchRipple
            disableFocusRipple
            style={{
              borderBottom: "5px solid orange",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "30px",
              textTransform: "none",
              color: "orange",
              background: "none",
              cursor: "default",
            }}
          >
            Skills
          </Button>
        </div>
        {SkillsData?.map((skill) => (
          <motion.div
            animate={animation}
            // initial={{ y: -50, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              ease: "easeOut",
              stiffness: 100,
              type: "spring",
              delay: skill.motionTime,
            }}
          >
            <Paper key={skill.id} style={{ marginBottom: "1rem" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1vh 1vw",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {skill.icon}
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      style={{ fontWeight: "bold", marginLeft: "1vw" }}
                    >
                      {skill.skill}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold", color: "#FF7F50" }}
                    >
                      {skill.percentage}%
                    </Typography>
                  </div>
                </div>
                <div>
                  <LinearProgress
                    variant="determinate"
                    value={skill.percentage}
                    color="primary"
                  />
                </div>
              </div>
            </Paper>
          </motion.div>
        ))}
      </Container>
    </div>
  );
};

export default Skills;
