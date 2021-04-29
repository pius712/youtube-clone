import * as React from 'react';
import Input from 'components/common/input';
import { ChangeEvent, FormEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SearchIcon from 'components/common/icons/SearchIcon';

interface SearchProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const cx = classNames.bind(styles);
const Search: React.FC<SearchProps> = ({
  onSubmit,
  value,
  onChange,
  ...rest
}) => {
  return (
    <form className={cx('search-container')} onSubmit={onSubmit}>
      <Input
        className={cx('search-input')}
        type={'search'}
        blind
        label={'검색어를 입력하세요'}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <button className={cx('search-button')}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
