import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface IButtonProps {
  children: ReactNode,
  className?: string
}

const Button: FC<IButtonProps> = ({ children, className='' }) => {
  return (
    <button
      className={classNames(styles.button, className)}
      type='button'
    >
      {children}
    </button>
  );
};

export default Button;
