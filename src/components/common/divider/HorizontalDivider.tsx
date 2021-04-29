import * as React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const HorizontalDivider: React.FC = () => {
  return <div className={cx('divider', 'horizontal')} />;
};

export default HorizontalDivider;
