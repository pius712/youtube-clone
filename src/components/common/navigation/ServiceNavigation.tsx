import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceNavigation.module.scss';
import classNames from 'classnames/bind';
import NotificationIcon from 'components/common/icons/NotificationIcon';
import AppIcon from 'components/common/icons/AppIcon';
import { Avatar } from '@material-ui/core';

const cx = classNames.bind(styles);
const ServiceNavigation: React.FC = () => {
  return (
    <nav className={cx('service-navigation-container')}>
      <ul className={cx('service-navigation-list')}>
        <li>
          <Link to={'/'}>
            <AppIcon />
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <NotificationIcon />
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <Avatar />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ServiceNavigation;
