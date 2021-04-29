import * as React from 'react';
import { default as Menu } from '@material-ui/icons/Menu';
import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';
import IconLayout from 'components/common/icons/IconLayout';

const MenuIcon: React.ComponentType<SvgIconProps> = ({ ...rest }) => {
  return (
    <IconLayout>
      <Menu {...rest} />
    </IconLayout>
  );
};

export default MenuIcon;
