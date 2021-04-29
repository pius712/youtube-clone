import * as React from 'react';
import styles from 'components/video/VideoCardList.module.scss';
import classNames from 'classnames/bind';
import VideoCard from 'components/video/VideoCard';
import VideoCardDesc from 'components/video/VideoCardDesc';

export interface Video {
  id: number;
  title: string;
  desc: string;
  uploader: string;
  views: number;
  createdAt: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  avatarSrc: string;
  avatarAlt: string;
}

interface VideoCardListProps {
  contents: Video[];
}

const cx = classNames.bind(styles);
const VideoCardList: React.FC<VideoCardListProps> = ({ contents }) => {
  console.log(styles);
  return (
    <ul className={cx('card-list')}>
      {contents.map((content) => (
        <li className={cx('card-item')} key={content.id}>
          <VideoCard content={content} />
        </li>
      ))}
    </ul>
  );
};

export default VideoCardList;
