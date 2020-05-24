import React from "react";
import "./Project.scss";
export interface ProjectInfo {
  name: string;
  logo: string;
  description: string;
  link: string;
}
export interface ProjectProps {
  info: ProjectInfo;
}

export const Project: React.FC<ProjectProps> = ({ info }) => {
  return (
    <div className="project">
      <div className={["project-logo", "project-value"].join(" ")}>
        {info.logo && info.logo !== "" && (
          <img width={30} src={info.logo.includes("http") ? info.logo : require(`../../assets/${info.logo}`)}></img>
        )}
      </div>
      <div className={["project-name", "project-value"].join(" ")}>
        <a target="_blank" href={info.link}>
          {info.name}
        </a>
      </div>
      <div className={["project-desc", "project-value"].join(" ")}>{info.description}</div>
    </div>
  );
};
