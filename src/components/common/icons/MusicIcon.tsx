import * as React from 'react';
import { default as Icon } from '@material-ui/icons/MusicNote';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';

const MusicIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return <Icon {...rest} />;
};

export default MusicIcon;
