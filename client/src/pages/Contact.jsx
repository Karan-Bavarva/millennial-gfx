import React from 'react';

const Contact = () => (
  <main>
    <div className="container">
      <h1>Let's Talk</h1>
      <p>Have a project or idea? We’d love to collaborate with you. Reach out through the form below and we’ll get back to you soon.</p>

      <form
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
        action="#"
        method="post"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  </main>
);

const inputStyle = {
  padding: '12px 16px',
  backgroundColor: '#0a0a36',
  border: '1px solid #444',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '14px 20px',
  backgroundColor: '#ffd700',
  color: '#0a0a36',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Contact;
