import React, { HtmlHTMLAttributes } from "react";
import "./Section.scss";
export interface SectionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  name?: string;
}

export const Section: React.FC<SectionProps> = ({ name, children, className, ...rest }) => {
  return (
    <div className={["section", className].join(" ")} {...rest}>
      {name && <div className="section-header">{name}</div>}
      <div className="section-body">{children}</div>
    </div>
  );
};
