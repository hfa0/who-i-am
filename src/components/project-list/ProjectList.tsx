import React from "react";
import { ProjectInfo, Project } from "../project/Project";

export interface ProjectListProps {
  projects: ProjectInfo[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((p, i) => (
        <Project key={i} info={p}></Project>
      ))}
    </div>
  );
};
