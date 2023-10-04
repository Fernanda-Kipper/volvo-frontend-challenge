import React from "react";
import { StyleProvider, ThemePicker } from 'vcc-ui';

import { HomeComponent } from "../src/components/HomeComponent";
import "../public/css/styles.css";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
      <ThemePicker variant="light">
        <HomeComponent />
      </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
