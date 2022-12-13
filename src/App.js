import { Box, Stack } from "@mui/material";
import Feed from "./components/feed";
import Leftbar from "./components/leftbar";
import Navbar from "./components/navbar";
import Rightbar from "./components/rightbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
