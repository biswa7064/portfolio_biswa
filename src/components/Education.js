import {
  Button,
  Container,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { profilePic } from "../assets";

const useStyles = makeStyles({
  btn: {
    borderBottom: "5px solid orange",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: "30px",
    textTransform: "none",
    color: "orange",
    cursor: "default",
  },
  btn_div: {
    textAlign: "center",
    width: "100%",
    marginTop: "20vh",
    marginBottom: "2vh",
  },
});

const Education = () => {
  const classes = useStyles();
  const imageAnimation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      imageAnimation?.start({
        x: 0,
        opacity: 1,
        transition: {
          ease: "easeOut",
          stiffness: 200,
          type: "spring",
          delay: 1,
        },
      });
      animation1.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 5,
          ease: "easeOut",
          stiffness: 100,
          type: "spring",
          delay: 0.5,
        },
      });
      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 5,
          ease: "easeOut",
          stiffness: 100,
          type: "spring",
          delay: 1,
        },
      });
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 5,
          ease: "easeOut",
          stiffness: 100,
          type: "spring",
          delay: 1.5,
        },
      });
    }
    if (!inView) {
      imageAnimation?.start({
        x: -50,
        opacity: 0,
      });
      animation1?.start({
        y: -50,
        opacity: 0,
      });
      animation2?.start({
        y: -50,
        opacity: 0,
      });
      animation3?.start({
        y: -50,
        opacity: 0,
      });
    }
  }, [imageAnimation, inView, animation1, animation2, animation3]);
  return (
    <>
      <Container
        maxWidth="md"
        style={{ marginTop: "15%" }}
        id="education"
        ref={ref}
      >
        <div className={classes.btn_div}>
          <Button
            className={classes.btn}
            disableRipple
            disableTouchRipple
            disableFocusRipple
            style={{ background: "none" }}
          >
            Education
          </Button>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <motion.div animate={imageAnimation}>
              <img
                src={profilePic}
                alt=""
                height="300px"
                style={{ borderRadius: 25, marginTop: "4rem" }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div animate={animation1}>
              <List>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h5">MCA</Typography>}
                  secondary={
                    <>
                      <Typography variant="h6">2019-2021</Typography>
                      <Typography variant="h6">
                        Gandhi Institute For Technology,Bhubaneswar
                      </Typography>
                    </>
                  }
                />
              </List>
            </motion.div>
            <motion.div animate={animation2}>
              <List>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h5">Bsc (Computer Science)</Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="h6">2015-2018</Typography>
                      <Typography variant="h6">
                        Chitalo Degree Mohavidyalaya,Jajpur
                      </Typography>
                    </>
                  }
                />
              </List>
            </motion.div>
            <motion.div animate={animation3}>
              <List>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h5">+2</Typography>}
                  secondary={
                    <>
                      <Typography variant="h6">2012-2014</Typography>
                      <Typography variant="h6">
                        Indravati Junior Mahavidyalaya,Jaipatna
                      </Typography>
                    </>
                  }
                />
              </List>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Education;
