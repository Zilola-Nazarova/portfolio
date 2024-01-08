import styles from '../styles/AboutTab.module.css';

const AboutTab = () => {
  const download = () => {
    const pdfUrl = 'Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Zilola.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className={styles.stack}>
        <h1 className={styles.title}>STACK</h1>
        <ul className={styles.topic}>
          Languages
          <li>HTML</li>
          <li>CSS</li>
          <li>Ruby</li>
          <li>JavaScript (ES5/ES6)</li>
        </ul>
        <ul className={styles.topic}>
          Frameworks
          <li>React.js</li>
          <li>Ruby on rails</li>
          <li>RSpec</li>
          <li>Capibara</li>
        </ul>
        <ul className={styles.topic}>
          Skills
          <li>Database Management</li>
          <li>CLI</li>
          <li>API Design</li>
          <li>Version Control</li>
        </ul>
      </div>
      <button
        type="button"
        className={`${styles.download} btn`}
        onClick={download}
      >
        Get my CV
      </button>
    </>
  );
};

export default AboutTab;
