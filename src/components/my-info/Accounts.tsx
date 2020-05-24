import React from "react";
import { AiFillGithub, AiOutlineInstagram, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { DiNpm, DiStackoverflow } from "react-icons/di";
import { RiStackshareLine } from "react-icons/ri";
import Me from "../../config/me.json";
export interface AccountsProps {}
const iconMap = {
  twitter: AiFillTwitterCircle,
  instagram: AiOutlineInstagram,
  github: AiFillGithub,
  linkedin: AiFillLinkedin,
  stackshare: RiStackshareLine,
  npm: DiNpm,
  stackoverflow: DiStackoverflow,
};

export const Accounts: React.FC<AccountsProps> = (props) => {
  return (
    <div className="accounts">
      {Object.keys(Me.accounts).map((account, i) => {
        const a = account as keyof typeof iconMap;
        if (!Me.accounts[a]) return null;
        const Icon = iconMap[a];
        return (
          <div key={i} className="account">
            <div className="account-logo">
              <a target="_blank" href={Me.accounts[a]}>
                <Icon size={30} className={`${account}-icon`}></Icon>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
