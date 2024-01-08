// import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Left from './Left';
import Right from './Right';

const Portfolio = () => {
  const [color, setColor] = useState(0);

  return (
    <>
      <Left colorTheme={(i) => setColor(i)} />
      <Right />
    </>
  );
};

export default Portfolio;
