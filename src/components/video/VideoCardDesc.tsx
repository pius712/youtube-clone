import * as React from 'react';
import styles from 'components/video/VideoCardDesc.module.scss';
import classNames from 'classnames/bind';
import VideoAvatar from 'components/video/VideoAvatar';
import DotDivider from 'components/common/divider/DotDivider';

const cx = classNames.bind(styles);
interface VideoCardDescProps {
  title: string;
  description: string;
  views: number;
  uploader: string;
  avatarSrc: string;
  createdAt: string;
}
const VideoCardDesc: React.FC<VideoCardDescProps> = ({
  title,
  description,
  views,
  uploader,
  avatarSrc,
  createdAt,
}) => {
  return (
    <div className={cx('desc-container')}>
      <div className={cx('avatar-container')}>
        <VideoAvatar avatarSrc={avatarSrc} uploader={uploader} />
      </div>
      <div className={cx('card-description')}>
        <h3>{title}</h3>
        <div className={cx('card-meta')}>
          <p>{uploader}</p>
          <dl>
            <dt>조회수</dt>
            <dd>
              {`${views} 만회`}
              <DotDivider />
            </dd>
            <dt className={cx('blind')}>{'생성일'}</dt>
            <dd>{createdAt}</dd>
          </dl>
          <p className={cx('blind')}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCardDesc;
