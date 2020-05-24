import React, { HTMLAttributes } from "react";
import { Section } from "../section/Section";
import "./MyInfo.scss";
import { Accounts } from "./Accounts";
import Me from "../../config/me.json";
import { myAge } from "../../utils";
export interface MyInfoProps extends HTMLAttributes<HTMLDivElement> {}

export const MyInfo: React.FC<MyInfoProps> = ({ className }) => {
  return (
    <Section className={className}>
      <div className="my-info-image-container">
        <img
          className="my-info-image"
          src={Me.image.includes("http") ? Me.image : require(`../../assets/${Me.image}`)}
        ></img>
      </div>
      <div className="my-info-me-container">
        <div className="my-info-me-entry">
          <div className="my-info-label">Name</div>
          <div className={["my-info-name", "my-info-value"].join(" ")}>{Me.name}</div>
        </div>
        <div className="my-info-me-entry">
          <div className="my-info-label">Age</div>
          <div className={["my-info-age", "my-info-value"].join(" ")}>{myAge()}</div>
        </div>
        <div className="my-info-me-entry">
          <div className="my-info-label">Profession</div>
          <div className={["my-info-profession", "my-info-value"].join(" ")}>{Me.profession}</div>
        </div>
      </div>
      <Accounts></Accounts>
    </Section>
  );
};
