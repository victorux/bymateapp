import { MouseEvent } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick: (e: MouseEvent) => void;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  disabled?: boolean;
  border?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

function Button({
  children,
  onClick,
  size,
  color,
  disabled,
  border,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const classNames = `${styles.Button} ${styles[size || "medium"]} ${
    styles[color || "transparent"]
  } ${styles[border ? "border" : "no-border"]} ${
    disabled ? styles.disabled : ""
  }`;
  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
}

export default Button;
