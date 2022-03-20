import React from "react";
import NavBar from "./components/NavBar";
import Tree from "./components/Tree";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="pt-16">
        <h1 className="text-3xl font-bold underline bg-red-300 text-red-600">
          Hello tailwind!
        </h1>

        <Tree></Tree>
      </div>
    </div>
  );
}

export default App;
