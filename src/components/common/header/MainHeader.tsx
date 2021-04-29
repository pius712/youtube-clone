import * as React from 'react';
import styles from './MainHeader.module.scss';
import classNames from 'classnames/bind';
import Search from 'components/common/search';
import useInput from 'components/common/hooks/useInput';
import { useCallback } from 'react';
import ServiceNavigation from 'components/common/navigation/ServiceNavigation';
import MenuIcon from 'components/common/icons/MenuIcon';
import Header from 'components/common/header/index';

const cx = classNames.bind(styles);

const MainHeader: React.FC = () => {
  const [keyword, onChangeKeyword] = useInput('');
  const searchKeyword = useCallback(() => {}, []);
  return (
    <Header>
      <div className={cx('header-content')}>
        <div className={cx('start')}>
          <MenuIcon />
          <h1>Youtube</h1>
        </div>
        <div className={cx('center')}>
          <div className={cx('search-box')}>
            <Search
              onSubmit={searchKeyword}
              onChange={onChangeKeyword}
              value={keyword}
            />
          </div>
        </div>
        <div className={cx('end')}>
          <ServiceNavigation />
        </div>
      </div>
    </Header>
  );
};

export default MainHeader;
