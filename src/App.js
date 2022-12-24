import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/admin/AdminLogin/Login";
import Auth from "./components/auth";
import Login from "./components/login";
import Signup from "./components/signup";
import Friendspage from "./pages/friendspage";
import Homepage from "./pages/homepage";
import AdminPage from "./pages/adminpage";
import Settingspage from "./pages/settingspage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <Auth>
                <Homepage />
              </Auth>
            }
          />
          <Route
            path="/settings"
            element={
              <Auth>
                <Settingspage />
              </Auth>
            }
          />
          <Route
            path="/friends"
            element={
              <Auth>
                <Friendspage />
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
