import "./App.css";
import Alert from "./components/Alert";

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#013f4d";
      showAlert("DarkMode has been succesfully applied!", "success");
      document.title="TextUtils - DarkMode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been succesfully applied!", "success");
      document.title="TextUtils - Home"
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container">
      
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Textform
          heading="Enter the Text to Analyse Below"
          mode={mode}
          showAlert={showAlert}
        />} />
      </Routes>
    
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;

        