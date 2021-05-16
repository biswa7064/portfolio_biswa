import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery("(max-width:700px)");
  const scrollView = (id) => {
    const res = document.getElementById(`${id}`);
    return res?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Drawer open={isOpen} onClose={handleClose}>
        <List
          style={{
            width: "200px",
            backgroundColor: "orange",
            color: "white",
            height: "200%",
          }}
        >
          <a href="#about" style={{ textDecoration: "none", color: "white" }}>
            <ListItem
              button
              onClick={() => {
                scrollView("about");
                handleClose();
              }}
            >
              <Typography variant="h6">About</Typography>
            </ListItem>
          </a>
          <a
            href="#education"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItem
              button
              onClick={() => {
                scrollView("education");
                handleClose();
              }}
            >
              <Typography variant="h6">Education</Typography>
            </ListItem>
          </a>
          <a href="#skills" style={{ textDecoration: "none", color: "white" }}>
            <ListItem
              button
              onClick={() => {
                scrollView("skills");
                handleClose();
              }}
            >
              <Typography variant="h6">Skills</Typography>
            </ListItem>
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
            <ListItem
              button
              onClick={() => {
                handleClose();
              }}
            >
              <Typography variant="h6">Contact</Typography>
            </ListItem>
          </a>
        </List>
      </Drawer>
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
          {!matches ? (
            <>
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
            </>
          ) : (
            <>
              <IconButton onClick={() => setIsOpen(true)}>
                <Menu style={{ color: "white", fontSize: "30px" }} />
              </IconButton>
            </>
          )}
        </div>
      </AppBar>
    </>
  );
};

export default Header;
