import * as React from 'react';
import classNames from 'classnames/bind';
import styles from 'components/movie/MovieCard.module.scss';
import { Movie } from 'components/movie/MovieCardList';

import { default as Thumbnail } from 'components/common/image';
import { Link } from 'react-router-dom';
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
      <Link to={'/'}>
        <Thumbnail ratio={'9:16'} src={thumbnailSrc} alt={thumbnailAlt} />
        <div className={cx('desc-container')}>
          <div className={cx('card-description')}>
            <h3>{title}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
