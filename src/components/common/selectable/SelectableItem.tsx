import * as React from 'react';
import { Link } from 'react-router-dom';

interface SelectableItemProps {
  className: string;
  to: string;
}

const SelectableItem: React.FC<SelectableItemProps> = ({
  className,
  to,
  children,
}) => {
  return (
    <li className={className}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default SelectableItem;
