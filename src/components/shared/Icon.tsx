import React, { FC } from "react";

interface IconProps {
  link?: string;
  icon?: any;
  children: React.ReactNode;
}

const Icon: FC<IconProps> = ({ link, icon, children }) => {
  return (
    <React.Fragment>
      <a target='_blank' rel='noreferrer' href={link}>
        <img src={icon && icon} alt='' />
        {children}
      </a>
    </React.Fragment>
  );
};
export default Icon;
