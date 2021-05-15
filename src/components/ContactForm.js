import { Button, Container, Grid, TextField } from "@material-ui/core";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <Container style={{ marginBottom: "30vh" }} maxWidth="sm">
        <div
          style={{
            textAlign: "center",
            width: "100%",
            marginBottom: "2vh",
          }}
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
              <TextField fullWidth variant="outlined" label="Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant="outlined" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                multiline
                rows={5}
                rowsMax={20}
                label="Your Comment"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                style={{ backgroundColor: "orange", color: "white" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default ContactForm;
