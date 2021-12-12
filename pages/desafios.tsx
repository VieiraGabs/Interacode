import { NextPage } from 'next';
import Image from 'next/image';

import Nav from '../components/nav';
import Footer from '../components/footer';

const DesafiosPage: NextPage = () => {
  return (
    <>
      <div className="my-4">
        <h1>Você deseja aprender a programar?</h1>
        <div
          className={`border-2 border-box cursor-pointer my-2 text-center ${'bg-box text-white'}`}
        >
          Sim
        </div>
        <div
          className={`border-2 border-box cursor-pointer text-center ${'bg-box text-white'}`}
        >
          Não
        </div>
      </div>
    </>
  );
};

export default DesafiosPage;
