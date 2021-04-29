import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './GuideNavigation.module.scss';
import HomeIcon from 'components/common/icons/HomeIcon';
import ExploreIcon from 'components/common/icons/ExploreIcon';
import SubscriptionIcon from 'components/common/icons/SubscriptionIcon';
import YoutubeIcon from 'components/common/icons/YoutubeIcon';
import MusicIcon from 'components/common/icons/MusicIcon';
import PlayListIcon from 'components/common/icons/PlayListIcon';

const cx = classNames.bind(styles);
const navItems = [
  {
    id: 1,
    src: '/',
    title: '홈',
    icon: <HomeIcon style={{ fontSize: '24px' }} />,
  },
  {
    id: 2,
    src: '/',
    title: '탐색',
    icon: <ExploreIcon style={{ fontSize: '24px' }} />,
  },
  {
    id: 3,
    src: '/',
    title: '구독',
    icon: <SubscriptionIcon style={{ fontSize: '24px' }} />,
  },
  {
    id: 4,
    src: '/',
    title: 'Originals',
    icon: <YoutubeIcon style={{ fontSize: '24px' }} />,
  },
  {
    id: 5,
    src: '/',
    title: 'Music',
    icon: <MusicIcon style={{ fontSize: '24px' }} />,
  },
  {
    id: 6,
    src: '/',
    title: '보관함',
    icon: <PlayListIcon style={{ fontSize: '24px' }} />,
  },
];
const GuideNavigation: React.FC = () => {
  return (
    <ul className={cx('guide-navigation-container')}>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link to={'/'}>
            <div className={cx('list-item')}>
              <span className={cx('icon-wrapper')}>{item.icon}</span>
              <span className={cx('icon-title')}>{item.title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GuideNavigation;
