import { PropsWithChildren } from "react";
import { PaperProps } from "./Paper.types";
import cn from "classnames";
import styles from "./Paper.module.css";

const Paper: React.FC<PropsWithChildren<PaperProps>> = ({
  className,
  children,
}) => {
  return <div className={cn(styles.paper, className)}>{children}</div>;
};

export default Paper;
