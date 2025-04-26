import { Routes, Route} from "react-router-dom";
import SubmitFeedback from "./pages/SubmitFeedback";
import Dashboard from "./pages/Dashboard";
import {
  AppBar,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"; // for background animations

const wowTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#e0eafc",
      paper: "#ffffff",
    },
    primary: {
      main: "#6366f1",
    },
    text: {
      primary: "#2e2e2e",
      secondary: "#6b7280",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 700 },
    subtitle2: { fontWeight: 500 },
  },
});

function App() {
  return (
    <ThemeProvider theme={wowTheme}>
      <CssBaseline />
      <div className="animated-background">
        <AppBar position="static" color="transparent" elevation={0}></AppBar>

        <Routes>
          <Route path="/" element={<SubmitFeedback />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
