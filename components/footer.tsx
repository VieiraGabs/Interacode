import { NextComponentType } from 'next';
import Image from 'next/image';

const Footer: NextComponentType = () => {
  return (
    <div className="bg-footer flex flex-row items-center text-white text-xl justify-center">
      <h2 className="ml-10">Interacode</h2>
    </div>
  );
};

export default Footer;
