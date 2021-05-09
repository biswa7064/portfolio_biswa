import {
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { profilePic } from "../assets";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  img_: {
    height: "300px",
    borderRadius: "50%",
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
    color: "#cc8400",
  },
});

const HeroSection = () => {
  const classes = useStyles();
  return (
    // #fff200#003b64

    <>
      <Container>
        <div className={classes.img_div}>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: -1000 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
            }}
          >
            <img src={profilePic} alt="" className={classes.img_} />
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              ease: "easeOut",
              duration: 2,
            }}
            className={classes.myName_div}
          >
            <Typography
              variant="h2"
              className={classes.fnt_bld}
              //   style={{ textAlign: "center" }}
            >
              Biswaranjan Das
            </Typography>
            <Typography
              variant="h4"
              className={classes.fnt_bld}
              style={{ color: "#b36200" }}
            >
              React Developer
            </Typography>
            <div>
              <IconButton>
                <Facebook fontSize="large" style={{ color: "#4267B2" }} />
              </IconButton>
              <IconButton>
                <LinkedIn fontSize="large" style={{ color: "#0077b5" }} />
              </IconButton>
              <IconButton>
                <Instagram fontSize="large" style={{ color: "#e95950" }} />
              </IconButton>
              <IconButton>
                <GitHub fontSize="large" style={{ color: "black" }} />
              </IconButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
