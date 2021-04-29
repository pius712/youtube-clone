import * as React from 'react';

import { default as Icon } from '@material-ui/icons/Explore';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';

const ExploreIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return <Icon {...rest} />;
};

export default ExploreIcon;
