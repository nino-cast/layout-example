import type { NextPage } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div>
      <h1>トップ画面</h1>
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
