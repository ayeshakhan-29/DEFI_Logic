import React, { FC } from "react";
import WorkIcon from "@mui/icons-material/Work";
import styles from "../../../styles/Shared.module.css";

interface IconFilledProps {
  children?: React.ReactNode;
  style?: any;
}
const IconFilled: FC<IconFilledProps> = ({ children, style }) => {
  return (
    <React.Fragment>
      <div className={styles.filled} style={style}>
        {children ? children : <WorkIcon color='primary' fontSize='small' />}
      </div>
    </React.Fragment>
  );
};
export default IconFilled;
