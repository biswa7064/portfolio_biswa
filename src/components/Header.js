import { AppBar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  const scrollView = (id) => {
    const res = document.getElementById(`${id}`);
    return res?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <AppBar
        position="sticky"
        style={{
          minHeight: "10vh",
          backgroundColor: "orange",
          marginBottom: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "95%",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <Typography
            style={{ marginRight: "2%", cursor: "pointer" }}
            onClick={() => scrollView("about")}
          >
            About
          </Typography>
          <Typography
            style={{
              marginRight: "2%",
              cursor: "pointer",
            }}
            onClick={() => scrollView("education")}
          >
            Education
          </Typography>
          <Typography
            style={{ marginRight: "2%", cursor: "pointer" }}
            onClick={() => scrollView("skills")}
          >
            Skills
          </Typography>
          <Typography style={{ marginRight: "2%", cursor: "pointer" }}>
            Work
          </Typography>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => scrollView("contact")}
          >
            Contact
          </Typography>
        </div>
      </AppBar>
    </>
  );
};

export default Header;
