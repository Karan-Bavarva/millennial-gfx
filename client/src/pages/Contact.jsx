// import React from 'react';

// const Contact = () => (
//   <main>
//     <div className="container">
//       <h1>Let's Talk</h1>
//       <p>Have a project or idea? We’d love to collaborate with you. Reach out through the form below and we’ll get back to you soon.</p>

//       <form
//         style={{
//           marginTop: '30px',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '20px'
//         }}
//         action="#"
//         method="post"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           required
//           style={inputStyle}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           required
//           style={inputStyle}
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="6"
//           required
//           style={{ ...inputStyle, resize: 'vertical' }}
//         />

//         <button type="submit" style={buttonStyle}>
//           Send Message
//         </button>
//       </form>
//     </div>
//   </main>
// );

// const inputStyle = {
//   padding: '12px 16px',
//   backgroundColor: '#0a0a36',
//   border: '1px solid #444',
//   borderRadius: '8px',
//   color: '#fff',
//   fontSize: '16px',
// };

// const buttonStyle = {
//   padding: '14px 20px',
//   backgroundColor: '#ffd700',
//   color: '#0a0a36',
//   border: 'none',
//   borderRadius: '8px',
//   fontWeight: 'bold',
//   fontSize: '16px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
// };

// export default Contact;





import React from 'react';

const Contact = () => (
  <main className="bg-[#0a0a36] text-white px-4 py-12 min-h-screen">
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Let's Talk</h1>
      <p className="text-gray-300 text-center">
        Have a project or idea? We’d love to collaborate with you. Reach out through the form below and we’ll get back to you soon.
      </p>

      <form action="#" method="post" className="space-y-5 mt-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-[#0a0a36] text-white border border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-[#0a0a36] text-white border border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="w-full px-4 py-3 bg-[#0a0a36] text-white border border-[#444] rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-[#0a0a36] font-bold py-3 rounded-lg hover:bg-yellow-300 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </main>
);

export default Contact;
