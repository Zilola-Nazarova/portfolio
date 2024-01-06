import { v4 as uuidv4 } from "uuid";
import {useRef} from 'react';
import { useState, createRef } from 'react';
import TabButton from './TabButton.jsx';
import HomeTab from './HomeTab';
import AboutTab from './AboutTab';
import Contact from './Contact'

const Right = () => {
  const links = ['home', 'about','contact'];
  const sections = [<HomeTab />, <AboutTab />, <Contact />]
  const [tab, setTab] = useState('home');
  const container = useRef(null);
  const linksRef = useRef(links.map(() => createRef()));

  
  const handleClick = (index) => {
    const ref = linksRef.current[index];
    container.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
    setTab(links[index]);
  };

  return(
    <div className="right">
      <header>
        {links.map((elem, i) => (
          <TabButton
            key={uuidv4()}
            isActive={tab === elem}
            onClick={() => handleClick(i)}
          >
            {elem}
          </TabButton>
        ))}
      </header>
      <div className="container" ref={container}>
        {sections.map((elem, i) => (
          <section
            className={links[i]}
            key={uuidv4()}
            ref={linksRef.current[i]}
          >
            {elem}
          </section>
        ))}
      </div>
    </div>
  )
};

export default Right;
