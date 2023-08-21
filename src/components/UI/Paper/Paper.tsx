import { PropsWithChildren } from "react";
import { PaperProps } from "./Paper.types";
import cn from "classnames";
import styles from "./Paper.module.css";

// Не доделал :(

/**
 * @param width Позволяет контролировать ширину компонента.
 * @param height Позволяет контролировать высоту компонента.
 */

const Paper: React.FC<PropsWithChildren<PaperProps>> = ({
  className,
  children,
  width,
  height,
}) => {
  return <div className={cn(styles.paper, className)}>{children}</div>;
};

export default Paper;
