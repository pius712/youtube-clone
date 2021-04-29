import * as React from 'react';
import { default as Icon } from '@material-ui/icons/Home';
import styles from './IconLayout.module.scss';
import classNames from 'classnames/bind';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';
import IconLayout from 'components/common/icons/IconLayout';

const cx = classNames.bind(styles);
const HomeIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return <Icon {...rest} />;
};

export default HomeIcon;
