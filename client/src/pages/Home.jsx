// const Home = () => (
//   <main>
//     <div className="container">
//       <h1>Transforming Ideas into Digital Reality</h1>
//       <p> Custom Software Development Across<br />
//         Multiple Technologies</p>
//       <p>At Millennial, we craft modern web solutions with cutting-edge technology to bring your vision to life.</p>
      
//       <img
//         src="https://source.unsplash.com/featured/?technology,innovation"
//         alt="Innovation"
//       />
//     </div>
//   </main>
// );

// export default Home;





// import React from 'react';

// const Home = () => (
//   <section style={heroStyle}>
//     <div style={heroContainer}>
//       {/* Left Content */}
//       <div style={heroText}>
//         <h1 style={heroTitle}>
//           Transforming Ideas<br /> into Digital Reality
//         </h1>
//         <p style={heroSubtitle}>
//           Custom Software Development Across Multiple Technologies
//         </p>
//         <p style={heroBody}>
//           At <strong>Millennial GFX</strong>, we craft future-ready solutions with smart tech, clean design, and a deep understanding of your business needs.
//         </p>
//         <a href="/services" style={ctaButton}>Explore Our Services</a>
//       </div>

//       {/* Right Illustration */}
//       <div style={heroImageWrapper}>
//         <img
//           src="/assets/innovation.jpg"
//           alt="Innovation"
//           style={{ width: '100%', maxWidth: '500px', borderRadius: '12px' }}
//         />
//       </div>
//     </div>
//   </section>
// );

// const heroStyle = {
//   background: 'linear-gradient(135deg, #0a0a36, #111141)',
//   padding: '80px 20px',
//   minHeight: '90vh',
//   color: '#fff',
//   display: 'flex',
//   alignItems: 'center',
// };

// const heroContainer = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   maxWidth: '1200px',
//   margin: '0 auto',
//   gap: '40px',
// };

// const heroText = {
//   flex: '1 1 500px',
// };

// const heroTitle = {
//   fontSize: '2.8rem',
//   fontWeight: 'bold',
//   marginBottom: '20px',
//   lineHeight: '1.3',
// };

// const heroSubtitle = {
//   fontSize: '1.2rem',
//   color: '#ffd700',
//   marginBottom: '10px',
// };

// const heroBody = {
//   fontSize: '1rem',
//   color: '#ccc',
//   marginBottom: '30px',
//   maxWidth: '500px',
// };

// const ctaButton = {
//   backgroundColor: '#ffd700',
//   color: '#0a0a36',
//   padding: '12px 24px',
//   borderRadius: '6px',
//   fontWeight: 'bold',
//   textDecoration: 'none',
// };

// const heroImageWrapper = {
//   flex: '1 1 400px',
//   textAlign: 'center',
// };


// export default Home;



import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a36] to-[#111141] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Transforming Ideas<br /> into Digital Reality
          </h1>
          <p className="text-yellow-400 text-lg mb-3">
            Custom Software Development Across Multiple Technologies
          </p>
          <p className="text-gray-300 text-base mb-6 max-w-lg mx-auto lg:mx-0">
            At <strong>Millennial GFX</strong>, we craft future-ready solutions with smart tech, clean design, and a deep understanding of your business needs.
          </p>
          <a
            href="/services"
            className="inline-block bg-yellow-400 text-[#0a0a36] font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            Explore Our Services
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 text-center">
          <img
            src="/assets/innovation.jpg"
            alt="Innovation"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;






