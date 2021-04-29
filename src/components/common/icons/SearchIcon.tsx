import * as React from 'react';
import { default as Icon } from '@material-ui/icons/Search';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';

const NotificationIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return <Icon style={{ fontSize: '16px' }} {...rest} />;
};

export default NotificationIcon;
