import React, { HtmlHTMLAttributes } from "react";
import "./Header.scss";
import { Popover } from "../popover/Popover";
import { GiHamburgerMenu } from "react-icons/gi";

export interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const header = [
  { name: "About me", anchor: "about-me" },
  { name: "Open source project", anchor: "open-source-projects" },
  { name: "Online projects", anchor: "online-projects" },
  { name: "Projects worked on", anchor: "worked-on" },
];

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={["header", className].join(" ")}>
      <ul className="header-list">
        {header.map((head, i) => (
          <li key={i}>
            <a href={`#${head.anchor}`}>{head.name}</a>
          </li>
        ))}
      </ul>

      <div className={"header-menu-wrapper"}>
        <Popover className={"header-popover"} element={<GiHamburgerMenu size={30} />}>
          <div className={"toggle-menu"}>
            {header.map((head, i) => (
              <div className={"menu-item"} key={i}>
                <a href={`#${head.anchor}`}>{head.name}</a>
              </div>
            ))}
          </div>
        </Popover>
      </div>
    </header>
  );
};
