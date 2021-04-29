import * as React from 'react';
import { type } from 'os';
import VerticalDivider from 'components/common/divider/VerticalDivider';
import DotDivider from 'components/common/divider/DotDivider';
import HorizontalDivider from 'components/common/divider/HorizontalDivider';

interface DividerProps {
  type: 'dot' | 'vertical' | 'horizontal';
}

const Divider: React.FC<DividerProps> = ({ type }) => {
  return type === 'dot' ? (
    <DotDivider />
  ) : type === 'vertical' ? (
    <VerticalDivider />
  ) : type === 'horizontal' ? (
    <HorizontalDivider />
  ) : null;
};

export default Divider;
