import * as React from 'react';
import { default as Icon } from '@material-ui/icons/Subscriptions';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';

const SubscriptionIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return <Icon style={{ fontSize: '16px' }} {...rest} />;
};

export default SubscriptionIcon;
