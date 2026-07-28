import React from "react";
import "./App.css";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";
import { FaBeerMugEmpty } from "@react-icons/fontawesome6_files/FaBeerMugEmpty";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <IconContext.Provider value={{ color: "#fa7" }}>
          <FaBeer />
          <FaBeerMugEmpty />
        </IconContext.Provider>
      </header>
    </div>
  );
};

export default App;
