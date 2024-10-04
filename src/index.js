import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { setupIonicReact } from '@ionic/react';
import App from "./App";
import "./index.css";
import '@ionic/react/css/core.css';
import FontFaceObserver from 'fontfaceobserver';

setupIonicReact();

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Create font observers for Montserrat and Poppins
    const montserratObserver = new FontFaceObserver('Montserrat');
    const poppinsObserver = new FontFaceObserver('Poppins');

    // Wait for both fonts to load
    Promise.all([
      montserratObserver.load(),
      poppinsObserver.load(),
    ]).then(() => {
      // Hide loading screen once fonts are loaded
      setIsLoading(false);
    }).catch((err) => {
      console.error('Font loading failed:', err);
      setIsLoading(false); // Fail-safe to hide loader
    });
  }, []);

  return (
    <>
      {/* Custom Loading Spinner and Background */}
      {isLoading && (
        <div className="loading-background">
          <div className="loading-spinner"></div>
        </div>
      )}
      
      {/* Render the App and SpeedInsights once loading is finished */}
      {!isLoading && (
        <>
          <App />
          <SpeedInsights />
        </>
      )}
    </>
  );
};

// Render the root component
root.render(<RootComponent />);
