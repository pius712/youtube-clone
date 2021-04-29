import * as React from 'react';

import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const DotDivider: React.FC = () => {
  return <span className={cx('divider', 'dot')} />;
};

export default DotDivider;
