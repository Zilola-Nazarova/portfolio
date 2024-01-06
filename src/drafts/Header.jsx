/* eslint-disable */

import {useRef} from 'react';

const Header = () => {
  const container = useRef(null);
  const hero = useRef(null);
  const contact = useRef(null);

  const handleClick = (ref) => {
    container.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
  };

  return(
    <header>
      <button onClick={() => handleClick(hero)}>about</button>
      <button onClick={() => handleClick(contact)}>contact</button>
    </header>
  )
};

export default Header;
