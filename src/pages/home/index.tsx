import * as React from 'react';
import VideoCardList from 'components/video/VideoCardList';
import VideoCard from 'components/video/VideoCard';
import Layout from 'pages/home/layout';
import HomeView from 'pages/home/HomeView';

const Home: React.FC = () => {
  return (
    <Layout>
      <HomeView />
    </Layout>
  );
};

export default Home;
