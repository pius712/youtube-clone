import * as React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { useMemo } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio: '1:1' | '16:9' | '9:16' | '4:3';
}
const cx = classNames.bind(styles);

const Image: React.FC<ImageProps> = ({ ratio, src, alt, ...rest }) => {
  const imageRatio = useMemo(() => {
    if (ratio === '1:1') {
      return 'rect';
    } else if (ratio === '16:9') {
      return 'wide';
    } else if (ratio === '4:3') {
      return 'default';
    } else if (ratio === '9:16') {
      return 'vertical';
    }
  }, [ratio]);
  return (
    <div className={cx('ratio-image', imageRatio)}>
      <img {...rest} src={src} alt={alt} />
    </div>
  );
};

export default Image;
