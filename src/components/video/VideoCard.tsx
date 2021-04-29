import * as React from 'react';
import styles from 'components/video/VideoCard.module.scss';
import classNames from 'classnames/bind';
import { Video } from 'components/video/VideoCardList';
import { default as Thumbnail } from 'components/common/image';
import VideoCardDesc from 'components/video/VideoCardDesc';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface VideoCardProps {
  content: Video;
}
const VideoCard: React.FC<VideoCardProps> = ({ content }) => {
  const {
    title,
    desc,
    thumbnailSrc,
    thumbnailAlt,
    avatarSrc,
    createdAt,
    uploader,
    views,
  } = content;
  return (
    <article className={cx('card-container')}>
      <Link to={'/'}>
        <Thumbnail ratio={'16:9'} src={thumbnailSrc} alt={thumbnailAlt} />
        <VideoCardDesc
          title={title}
          description={desc}
          avatarSrc={avatarSrc}
          createdAt={createdAt}
          uploader={uploader}
          views={views}
        />
      </Link>
    </article>
  );
};

export default VideoCard;
