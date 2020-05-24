import React, { HTMLAttributes } from "react";
import "./AboutMe.scss";
import { Section } from "../section/Section";
import bio from "../../config/bio";
import { myAge } from "../../utils";
export interface AboutMeProps extends HTMLAttributes<HTMLDivElement> {}

const AboutMeText = () => {
  return <span className="about-me-text">{bio()}</span>;
};

export const AboutMe: React.FC<AboutMeProps> = (props) => {
  return (
    <Section {...props}>
      <div className="about-me">
        <AboutMeText />
      </div>
    </Section>
  );
};
