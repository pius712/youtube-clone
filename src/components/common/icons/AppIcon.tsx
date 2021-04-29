import * as React from 'react';
import { default as App } from '@material-ui/icons/Apps';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';
import IconLayout from 'components/common/icons/IconLayout';

const AppIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return (
    <IconLayout>
      <App {...rest} />
    </IconLayout>
  );
};

export default AppIcon;
