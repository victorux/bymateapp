import { MouseEvent } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  onClick: (e: MouseEvent) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  border?: boolean;
}

function Button({
    children,
    onClick,
    size,
    color,
    disabled,
    border
}: ButtonProps) {
    const classNames = `${styles.Button} ${styles[size || 'medium']} ${styles[color || 'transparent']} ${styles[border ? 'border' : 'no-border']} ${disabled ? styles.disabled : ''}`;
    return (
        <button type='button' className={classNames} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;