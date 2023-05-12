import { Box } from "@mui/material";
import React from "react";
import buddha from "../assets/buddha.jpeg";
import buddhapic from "../assets/buddhapic.jpg";

const Header = () => {
  return (
    <Box>
      <img src={buddhapic} alt="buddha" width="100%" height="650px" />
      <img
        src={buddha}
        alt="budha"
        style={{
          position: "relative",
          right: "-500px",
          bottom: "-250px",
          height: "320px",
          width: "320px",
        }}
      />
    </Box>
  );
};

export default Header;
