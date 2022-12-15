import { Box, Stack } from "@mui/material";
import Leftbar from "../components/leftbar";
import Navbar from "../components/navbar";
import Rightbar from "../components/rightbar";
import Settings from "../components/settings";

const Settingspage = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <Settings />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default Settingspage;
