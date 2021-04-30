import * as React from 'react';
import styles from 'pages/home/HomeView.module.scss';
import classNames from 'classnames/bind';

import VideoCardList, { Video } from 'components/video/VideoCardList';
import MovieSection from 'pages/home/layout/MovieSesction';
import VideoSection from 'pages/home/layout/VideoSection';
import MovieCardList from 'components/movie/MovieCardList';
import { movies, videos } from 'pages/home/mock';

const cx = classNames.bind(styles);

const HomeView: React.FC = () => {
  return (
    <main className={cx('main-container')}>
      <VideoSection>
        <VideoCardList contents={videos} />
      </VideoSection>
      <MovieSection>
        <MovieCardList contents={movies} />
      </MovieSection>
      <VideoSection>
        <VideoCardList contents={videos} />
      </VideoSection>
    </main>
  );
};

export default HomeView;
