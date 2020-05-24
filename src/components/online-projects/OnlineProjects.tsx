import React, { HtmlHTMLAttributes } from "react";
import { Section } from "../section/Section";
import "./OnlineProjects.scss";
import { ProjectList } from "../project-list/ProjectList";
import Projects from "../../config/projects.json";

export interface OnlineProjectsProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const OnlineProjects: React.FC<OnlineProjectsProps> = ({ className, ...rest }) => {
  return (
    <Section name={["Online projects", className].join(" ")} {...rest}>
      <ProjectList projects={Projects.onlineProjects}></ProjectList>
    </Section>
  );
};
