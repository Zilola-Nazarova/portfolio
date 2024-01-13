import { useState } from 'react';
import Left from './Left';
import Right from './Right';

const Portfolio = () => {
  const [color, setColor] = useState(0);
  const [blink, setBlink ] = useState(false);
  
  const doBlink = () => {
    setBlink(prevMode => !prevMode);
    setTimeout(() =>
      {setBlink(prevMode => !prevMode)},
    200)
  };

  return (
    <>
      <Left colorTheme={(i) => setColor(i)} doBlink={() => doBlink()}/>
      <Right color={color} doBlink={() => doBlink()} blink={blink} />
    </>
  );
};

export default Portfolio;
