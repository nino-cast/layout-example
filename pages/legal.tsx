import { ReactElement } from 'react';
import LegalLayout from '../components/LegalLayout';

const Legal = () => {
  return (
    <div>
      <h1>利用規約画面</h1>
    </div>
  );
};

export default Legal;

Legal.getLayout = (page: ReactElement) => <LegalLayout>{page}</LegalLayout>;
