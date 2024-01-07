import styles from '../styles/Contact.module.css';

const Contact = () => (
  <>
    <h2>Get started</h2>
    <p className="dark-blue poppins">
      I&apos;m always interested in hearing about new projects,
      so if you&apos;d like to chat please get in touch.
    </p>
    <form
      id="send-message"
      action="https://formspree.io/f/xpzegyyg"
      method="POST"
    >
      <label
        className="poppins"
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
      <small className="poppins" />
      <label
        className="poppins"
        htmlFor="user-email"
      >
        Your email
        <input
          type="email"
          id="user-email"
          name="user_email"
          placeholder="Enter your email."
          required
        />
      </label>
      <small className="poppins" />
      <label
        className="poppins"
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
        className="poppins white"
        type="submit"
      >
        Start collaboration
      </button>
    </form>
  </>
);

export default Contact;
