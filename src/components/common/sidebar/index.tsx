import * as React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Sidebar: React.FC = ({ children }) => {
  return (
    <aside className={cx('sidebar-container')}>
      <nav>{children}</nav>
    </aside>
  );
};

export default Sidebar;
