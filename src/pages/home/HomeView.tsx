import * as React from 'react';
import styles from 'pages/home/HomeView.module.scss';
import classNames from 'classnames/bind';

import VideoCardList, { Video } from 'components/video/VideoCardList';

const cx = classNames.bind(styles);
const videos: Video[] = [
  {
    id: 1,
    title: 'hi1',
    desc: 'hi1',
    uploader: 'hi1',
    views: 10,
    createdAt: '2021-01-01',
    thumbnailSrc: '',
    thumbnailAlt: '',
    avatarSrc: '',
    avatarAlt: '',
  },
  {
    id: 1,
    title: 'hi1',
    desc: 'hi1',
    uploader: 'hi1',
    views: 10,
    createdAt: '2021-01-01',
    thumbnailSrc: '',
    thumbnailAlt: '',
    avatarSrc: '',
    avatarAlt: '',
  },
  {
    id: 1,
    title: 'hi1',
    desc: 'hi1',
    uploader: 'hi1',
    views: 10,
    createdAt: '2021-01-01',
    thumbnailSrc: '',
    thumbnailAlt: '',
    avatarSrc: '',
    avatarAlt: '',
  },
  {
    id: 1,
    title: 'hi1',
    desc: 'hi1',
    uploader: 'hi1',
    views: 10,
    createdAt: '2021-01-01',
    thumbnailSrc: '',
    thumbnailAlt: '',
    avatarSrc: '',
    avatarAlt: '',
  },
  {
    id: 1,
    title: 'hi1',
    desc: 'hi1',
    uploader: 'hi1',
    views: 10,
    createdAt: '2021-01-01',
    thumbnailSrc: '',
    thumbnailAlt: '',
    avatarSrc: '',
    avatarAlt: '',
  },
  {
    id: 1,
    title: 'hi1',
    desc: 'hi1',
    uploader: 'hi1',
    views: 10,
    createdAt: '2021-01-01',
    thumbnailSrc: '',
    thumbnailAlt: '',
    avatarSrc: '',
    avatarAlt: '',
  },
];
const HomeView: React.FC = () => {
  return (
    <main className={cx('main-container')}>
      <VideoCardList contents={videos} />
    </main>
  );
};

export default HomeView;
