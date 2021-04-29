import * as React from 'react';

import { default as Icon } from '@material-ui/icons/YouTube';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';

const YoutubeIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return <Icon {...rest} />;
};

export default YoutubeIcon;
