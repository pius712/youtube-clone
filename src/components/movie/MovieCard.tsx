import * as React from 'react';
import classNames from 'classnames/bind';
import styles from 'components/movie/MovieCard.module.scss';
import { Movie } from 'components/movie/MovieCardList';

interface MovieCardProps {
  content: Movie;
}
const cx = classNames.bind(styles);
const MovieCard: React.FC<MovieCardProps> = ({ content }) => {
  const {
    title,
    createdAt,
    desc,
    id,
    provider,
    thumbnailAlt,
    thumbnailSrc,
    views,
  } = content;
  return (
    <article>
      <div className={cx('desc-container')}>
        <div className={cx('card-description')}>
          <h3>{title}</h3>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
