import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: '';
}

const cx = classNames.bind(styles);

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button className={cx('button')} {...rest}>
      {children}
    </button>
  );
};

export default Button;
