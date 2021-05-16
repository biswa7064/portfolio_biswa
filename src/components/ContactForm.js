import { Button, Container, Grid, TextField } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation?.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, delay: 0.5 },
      });
      animation1?.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, delay: 1 },
      });
      animation2?.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, delay: 1.5 },
      });
      animation3?.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, delay: 2 },
      });
    }
    if (!inView) {
      animation?.start({
        y: -50,
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
  }, [inView, animation, animation1, animation2, animation3]);
  return (
    <>
      <Container style={{ marginBottom: "30vh" }} maxWidth="sm" ref={ref}>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            marginBottom: "2vh",
          }}
          id="contact"
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
            Contact
          </Button>
        </div>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <motion.div
                animate={animation}
                // initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
                <TextField fullWidth variant="outlined" label="Name" />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                animate={animation1}
                // initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ type: "spring", stiffness: 200, delay: 1 }}
              >
                <TextField fullWidth variant="outlined" label="Email" />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div animate={animation2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={5}
                  rowsMax={20}
                  label="Your Comment"
                />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div animate={animation3}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{ backgroundColor: "orange", color: "white" }}
                  endIcon={
                    <i
                      class="fas fa-paper-plane"
                      style={{ color: "white" }}
                    ></i>
                  }
                >
                  Submit
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default ContactForm;
