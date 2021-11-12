import { ReactElement } from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <div>
      <h1>アバウト画面</h1>
    </div>
  );
};

export default About;

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
