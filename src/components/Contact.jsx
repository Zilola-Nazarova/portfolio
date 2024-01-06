import styles from '../styles/Contact.module.css'

const Contact = () => (
  <>
    <h2>Get started</h2>
    <p className="dark-blue poppins">
      I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
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
      </label>
      <input
        type="text"
        id="user-name"
        name="user_name"
        placeholder="Enter your name"
        maxLength="30"
        required>
      </input>
      <small className="poppins"></small>
      <label
        className="poppins"
        htmlFor="user-email"
      >
        Your email
      </label>
      <input
        type="email"
        id="user-email"
        name="user_email"
        placeholder="Enter your email."
        required>
      </input>
      <small className="poppins"></small>
      <label
        className="poppins"
        htmlFor="user-message"
      >
        Your message
      </label>
      <textarea
        id="user-message"
        name="user_message"
        placeholder="Enter your message here..."
        maxLength="500"
        required
      >
      </textarea>
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
