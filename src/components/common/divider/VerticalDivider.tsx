import * as React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const VerticalDivider: React.FC = () => {
  return <div className={cx('divider', 'vertical')} />;
};

export default VerticalDivider;
