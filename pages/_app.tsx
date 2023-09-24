import React from "react";
import { StyleProvider, ThemePicker } from 'vcc-ui';

import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
      <ThemePicker variant="light">
        <HelloWorld />
      </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
