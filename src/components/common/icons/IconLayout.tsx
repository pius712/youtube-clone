import * as React from 'react';
import styles from './IconLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const IconLayout: React.FC = ({ children }) => {
  return <span className={cx('layout')}>{children}</span>;
};
export default IconLayout;
