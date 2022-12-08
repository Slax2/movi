import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Router from "./router";
import { ThemeProvider } from "@mui/material";
import theme from "./pages/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);
