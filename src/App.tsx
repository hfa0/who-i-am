import React from "react";
import "./App.scss";
import { Header } from "./components/header/Header";
import { AboutMe } from "./components/about-me/AboutMe";
import { OnlineProjects } from "./components/online-projects/OnlineProjects";
import { OpenSourceProjects } from "./components/open-source-projects/OpenSourceProjects";
import { WorkedOn } from "./components/worked-on/WorkedOn";
import { MyInfo } from "./components/my-info/MyInfo";

function App() {
  return (
    <>
      <Header></Header>
      <div className="app-content">
        <div className="app-content-right">
          <MyInfo></MyInfo>
        </div>
        <div className="app-content-left">
          <AboutMe id="about-me"></AboutMe>
          <OnlineProjects id="online-projects"></OnlineProjects>
          <OpenSourceProjects id="open-source-projects"></OpenSourceProjects>
          <WorkedOn id="worked-on"></WorkedOn>
        </div>
      </div>
    </>
  );
}

export default App;
