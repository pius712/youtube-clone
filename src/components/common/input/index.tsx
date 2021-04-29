import * as React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  blind?: boolean;
}
const cx = classNames.bind(styles);
const Input: React.FC<InputProps> = ({ label, blind = true, ...rest }) => {
  return (
    <>
      <label className={cx({ blind: blind })}>{label}</label>
      <input className={cx('default')} {...rest} />
    </>
  );
};

export default Input;
