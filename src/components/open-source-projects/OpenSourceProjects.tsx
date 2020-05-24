import React, { HtmlHTMLAttributes } from "react";
import { Section } from "../section/Section";
import "./OpenSourceProjects.scss";
import { ProjectList } from "../project-list/ProjectList";
import Projects from "../../config/projects.json";

export interface OpenSourceProjectsProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const OpenSourceProjects: React.FC<OpenSourceProjectsProps> = ({ className, ...rest }) => {
  return (
    <Section className={className} {...rest} name={"Open Source Projects"}>
      <ProjectList projects={Projects.openSourceProjects}></ProjectList>
    </Section>
  );
};
