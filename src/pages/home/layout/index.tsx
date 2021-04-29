import * as React from 'react';
import styles from 'pages/home/layout/index.module.scss';
import classNames from 'classnames/bind';

import Sidebar from 'components/common/sidebar';
import MainHeader from 'components/common/header/MainHeader';
import GuideNavigation from 'components/common/navigation/GuideNavigation';

const cx = classNames.bind(styles);
const Layout: React.FC = ({ children }) => {
  return (
    <div className={cx('layout')}>
      <MainHeader />
      <div className={cx('content-layout')}>
        <div className={cx('content-container')}>
          <Sidebar>
            <GuideNavigation />
          </Sidebar>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
