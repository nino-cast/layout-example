import Slider from '@mui/material/Slider';
import { ReactElement, useState } from 'react';
import Layout from '../components/Layout';

const Home = () => {
  const [value, setValue] = useState(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div>
      <h1>トップ画面</h1>
      <Slider
        defaultValue={value}
        onChange={handleChange}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <p>{value}%</p>
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
