import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
interface AvatarProps {
  size: 'small' | 'medium' | 'large';
  src: string;
  alt: string;
}
const cx = classNames.bind(styles);
const Avatar: React.FC<AvatarProps> = ({ size, src, alt }) => {
  return <img className={cx('avatar', `${size}`)} src={src} alt={alt} />;
};

export default Avatar;
