import styles from '../styles/Contact.module.css';

const Contact = () => (
  <>
    <h2 className={styles.title}>GET STARTED</h2>
    <p className={styles.text}>
      I&apos;m always interested in hearing about new projects,
      so if you&apos;d like to chat please get in touch.
    </p>
    <form
      className={styles.form}
      id="send-message"
      action="https://formspree.io/f/xpzegyyg"
      method="POST"
    >
      <label
        className={styles.label}
        htmlFor="user-name"
      >
        Your name
        <input
          type="text"
          id="user-name"
          name="user_name"
          placeholder="Enter your name"
          maxLength="30"
          required
        />
      </label>
      <small className={styles.error} />
      <label
        className={styles.label}
        htmlFor="user-email"
      >
        Your email
        <input
          type="email"
          id="user-email"
          name="user_email"
          placeholder="Enter your email"
          required
        />
      </label>
      <small className={styles.error} />
      <label
        className={styles.label}
        htmlFor="message"
      >
        Your message
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message here..."
          maxLength="500"
          required
        />
      </label>
      <button
        className={`${styles.submit} btn`}
        type="submit"
      >
        SEND
      </button>
    </form>
  </>
);

export default Contact;
