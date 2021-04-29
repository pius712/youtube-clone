import * as React from 'react';
import styles from 'components/video/VideoAvatar.module.scss';
import classNames from 'classnames/bind';
import Avatar from 'components/common/avatar';

interface VideoAvatarProps {
  avatarSrc: string;
  uploader: string;
}

const cx = classNames.bind(styles);
const VideoAvatar: React.FC<VideoAvatarProps> = ({ avatarSrc, uploader }) => {
  return <Avatar size={'medium'} src={avatarSrc} alt={uploader} />;
};

export default VideoAvatar;
