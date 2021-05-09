import {
  Button,
  Container,
  LinearProgress,
  Paper,
  Typography,
} from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

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
    id: "skill_1",
    skill: "Java Script",
    percentage: "80",
    icon: <FaJs size="40px" color="orange" />,
    motionTime: 1.5,
  },
  {
    id: "skill_1",
    skill: "React JS",
    percentage: "80",
    icon: <FaReact size="40px" color="orange" />,
    motionTime: 2,
  },
  {
    id: "skill_1",
    skill: "Firebase",
    percentage: "80",
    icon: <SiFirebase size="40px" color="orange" />,
    motionTime: 2.5,
  },
  {
    id: "skill_1",
    skill: "Github",
    percentage: "90",
    icon: <FaGithub size="40px" color="orange" />,
    motionTime: 3,
  },
];
console.log(SkillsData);
const Skills = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container maxWidth={"md"}>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            marginTop: "20vh",
            marginBottom: "2vh",
          }}
        >
          <Button
            style={{
              borderBottom: "5px solid orange",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "30px",
              textTransform: "none",
              color: "orange",
            }}
          >
            Skills
          </Button>
        </div>
        {SkillsData.map((skill) => (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
