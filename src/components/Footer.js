import { IconButton, Typography } from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ minHeight: "10vh", backgroundColor: "orange" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          style={{ fontFamily: "sans-serif", marginTop: "1%", color: "white" }}
        >
          Biswaranjan Das
        </Typography>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {" "}
          <IconButton>
            <Facebook
              fontSize="large"
              style={{ color: "white", fontSize: "35px" }}
            />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/biswaranjan-das-3b403a171/"
            target="blank"
          >
            <LinkedIn
              fontSize="large"
              style={{ color: "white", fontSize: "35px" }}
            />
          </IconButton>
          <IconButton>
            <Instagram
              fontSize="large"
              style={{ color: "white", fontSize: "35px" }}
            />
          </IconButton>
          <IconButton>
            <GitHub
              fontSize="large"
              style={{ color: "white", fontSize: "35px" }}
            />
          </IconButton>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
