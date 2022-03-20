import React from "react";
import Content from "./components/Contents";
import NavBar from "./components/NavBar";
import Tree from "./components/Tree";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="pt-16 flex space-x-2">
        <div className="w-96">
          <Tree></Tree>
        </div>
        <div>
          <Content
            contents={[
              {
                imageSrc:
                  "https://blogpfthumb-phinf.pstatic.net/data18/2006/4/14/54/12-813-sukjun40.jpg",
                title: "pang",
              },
            ]}
          ></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
