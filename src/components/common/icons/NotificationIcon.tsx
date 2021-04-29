import * as React from 'react';
import { default as Notification } from '@material-ui/icons/Notifications';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';
import IconLayout from 'components/common/icons/IconLayout';

const NotificationIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return (
    <IconLayout>
      <Notification {...rest} />
    </IconLayout>
  );
};

export default NotificationIcon;
