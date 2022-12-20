import { AccountCircle, SecurityOutlined } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import General from "./general";
import Security from "./security";

const Settings = () => {
  const [general, setGeneral] = useState(true);
  const [security, setSecurity] = useState(false);

  const generalToggler = () => {
    setGeneral(true);
    setSecurity(false);
  };

  const securityToggler = () => {
    setSecurity(true);
    setGeneral(false);
  };

  return (
    <Box
      bgcolor="whitesmoke"
      flex={5}
      p={2}
      sx={{ borderRadius: { xm: "0px", sm: "15px" } }}
    >
      <Box
        sx={{
          background: "white",
          height: "auto",
          width: "100%",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "15px",
        }}
      >
        <Button
          onClick={generalToggler}
          sx={{ marginX: "5px" }}
          variant="outlined"
          startIcon={<AccountCircle />}
        >
          General
        </Button>
        <Button
          onClick={securityToggler}
          variant="outlined"
          startIcon={<SecurityOutlined />}
        >
          Security
        </Button>
      </Box>
      {general && <General />}
      {security && <Security />}
    </Box>
  );
};

export default Settings;
