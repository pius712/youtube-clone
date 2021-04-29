import * as React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Header: React.FC = ({ children }) => {
  return <header className={cx('header')}>{children}</header>;
};

export default Header;
