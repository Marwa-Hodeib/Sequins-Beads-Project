import React from "react";
import "./App.css";
import MW from "./pages/gallery/modalWindow/modalwindow";
import { Grommet } from "grommet";

function App() {
  return (
    <Grommet plain>
      <div className="App">
        <MW />
      </div>
    </Grommet>
  );
}

export default App;
