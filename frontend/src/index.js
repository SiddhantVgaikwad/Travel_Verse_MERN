import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";



const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
   
    <AuthContextProvider>
    <ThemeProvider>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
    </ThemeProvider>
    </AuthContextProvider>
   
  </React.StrictMode>
);
