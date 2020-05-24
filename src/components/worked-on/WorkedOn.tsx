import React, { HtmlHTMLAttributes } from "react";
import Projects from "../../config/projects.json";
import { Section } from "../section/Section";
import "./WorkedOn.scss";
import { ProjectList } from "../project-list/ProjectList";

export interface WorkedOnProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const WorkedOn: React.FC<WorkedOnProps> = ({ className, ...rest }) => {
  return (
    <Section className={className} {...rest} name="Projects worked on">
      <ProjectList projects={Projects.projectsWorkedOn}></ProjectList>
    </Section>
  );
};
