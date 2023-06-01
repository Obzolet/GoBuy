import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CarritoProvider from "./providers/CarritoProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <CarritoProvider>
        <App />
      </CarritoProvider>
    
  </React.StrictMode>
);

//Router provider y configurar el router