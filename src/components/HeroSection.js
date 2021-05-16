import {
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React, { useEffect } from "react";
import { profilePic } from "../assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles({
  img_: {
    height: "320px",
    borderRadius: "30%",
  },
  img_div: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "2rem",
    width: "100%",
    justifyContent: "space-evenly",
  },
  myName_div: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  fnt_bld: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    // color: "#cc8400",
  },
});

const HeroSection = () => {
  const classes = useStyles();
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation1 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation?.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 50,
        },
      });
      animation1?.start({
        opacity: 1,
        transition: {
          ease: "easeOut",
          duration: 2,
        },
      });
    }
    if (!inView) {
      animation?.start({
        x: -1000,
        opacity: 0,
      });
      animation1?.start({
        opacity: 0,
      });
    }
  });
  return (
    <>
      <Container id="about" ref={ref}>
        <div className={classes.img_div}>
          <motion.div animate={animation}>
            <img src={profilePic} alt="" className={classes.img_} />
          </motion.div>
          <motion.div animate={animation1} className={classes.myName_div}>
            <Typography
              align="center"
              variant="h2"
              className={classes.fnt_bld}
              //   style={{ textAlign: "center" }}
            >
              Hi, I'am Biswaranjan
            </Typography>
            <Typography
              align="center"
              variant="h2"
              className={classes.fnt_bld}
              style={{ color: "orange" }}
            >
              React Developer
            </Typography>
            <div style={{ textAlign: "center" }}>
              <IconButton>
                <Facebook
                  fontSize="large"
                  style={{ color: "#4267B2", fontSize: "50px" }}
                />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/biswaranjan-das-3b403a171/"
                target="blank"
              >
                <LinkedIn
                  fontSize="large"
                  style={{ color: "#0077b5", fontSize: "50px" }}
                />
              </IconButton>
              <IconButton>
                <Instagram
                  fontSize="large"
                  style={{ color: "#e95950", fontSize: "50px" }}
                />
              </IconButton>
              <IconButton>
                <GitHub
                  fontSize="large"
                  style={{ color: "black", fontSize: "50px" }}
                />
              </IconButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
