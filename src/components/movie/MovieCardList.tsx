import * as React from 'react';
import styles from 'components/movie/MovieCardList.module.scss';
import classNames from 'classnames/bind';
import MovieCard from 'components/movie/MovieCard';

export interface Movie {
  id: number;
  title: string;
  desc: string;
  provider: string;
  views: number;
  createdAt: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
}
interface MovieCardListProps {
  contents: Movie[];
}
const cx = classNames.bind(styles);
const MovieCardList: React.FC<MovieCardListProps> = ({ contents }) => {
  return (
    <ul className={cx('card-list')}>
      {contents.map((content) => (
        <li className={cx('card-item')} key={content.id}>
          <MovieCard content={content} />
        </li>
      ))}
    </ul>
  );
};

export default MovieCardList;
