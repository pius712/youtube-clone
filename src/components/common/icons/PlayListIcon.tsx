import * as React from 'react';
import { default as Icon } from '@material-ui/icons/ShopTwo';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';

const PlayListIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return <Icon {...rest} />;
};

export default PlayListIcon;
