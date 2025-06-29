// import React from 'react';

// const About = () => (
//   <main>
//     <div className="container">
//       <h1>About Millennial GFX</h1>

//       <p>
//         At <strong>Millennial GFX</strong>, we are not just developers—we are digital architects. 
//         Founded with a vision to empower businesses through innovation, we blend creativity, technology, 
//         and strategy to deliver tailor-made solutions across industries.
//       </p>

//       <p>
//         With expertise spanning <strong>software development</strong>, <strong>branding</strong>, 
//         <strong>UI/UX design</strong>, and <strong>digital transformation</strong>, 
//         our mission is to help businesses launch, grow, and lead in the digital space.
//       </p>

//       {/* Mission & Vision Cards */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//         gap: '24px',
//         marginTop: '40px'
//       }}>
//         <div style={cardStyle}>
//           <h2 style={cardTitle}>Our Mission</h2>
//           <p>
//             To empower businesses through innovative technology solutions that simplify workflows,
//             enhance customer experience, and drive measurable growth.
//           </p>
//         </div>

//         <div style={cardStyle}>
//           <h2 style={cardTitle}>Our Vision</h2>
//           <p>
//             To be a global leader in custom software and creative tech services, known for delivering
//             impactful, design-led digital experiences.
//           </p>
//         </div>
//       </div>

//       {/* What Sets Us Apart */}
//       <h2 style={{ marginTop: '60px', marginBottom: '20px' }}>What Sets Us Apart</h2>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//         gap: '24px'
//       }}>
//         <div style={highlightCard}>
//           <h3 style={highlightTitle}>🎯 Purpose-Driven Design</h3>
//           <p>We don’t just build for looks—we build to solve real problems with thoughtful, strategic design.</p>
//         </div>
//         <div style={highlightCard}>
//           <h3 style={highlightTitle}>🚀 Built for Scale</h3>
//           <p>Whether you're a startup or scaling enterprise, our solutions grow with your business.</p>
//         </div>
//         <div style={highlightCard}>
//           <h3 style={highlightTitle}>💡 Innovation at Core</h3>
//           <p>We thrive on bold ideas and emerging technologies to keep your brand ahead of the curve.</p>
//         </div>
//         <div style={highlightCard}>
//           <h3 style={highlightTitle}>🤝 Human-Centric</h3>
//           <p>We listen, collaborate, and deliver with empathy to build long-term partnerships—not just projects.</p>
//         </div>
//         <div style={highlightCard}>
//           <h3 style={highlightTitle}>📈 Results-Focused</h3>
//           <p>Every design, line of code, and strategy we build is aligned with your business outcomes.</p>
//         </div>
//         <div style={highlightCard}>
//           <h3 style={highlightTitle}>🛠️ Full-Cycle Delivery</h3>
//           <p>From concept to post-launch support, we handle the entire lifecycle so you can focus on growth.</p>
//         </div>
//       </div>

//       <p style={{ marginTop: '60px' }}>
//         Whether you’re launching a startup or scaling an enterprise product, 
//         <strong> Millennial GFX</strong> is your partner in creating meaningful digital experiences.
//       </p>

//       <p style={{ marginTop: '30px' }}>
//         Our multidisciplinary team brings together strategists, developers, designers, and analysts 
//         who are passionate about crafting solutions that deliver real business results. We understand 
//         that every brand has a unique story—and we’re here to bring yours to life with precision, creativity, 
//         and technical excellence.
//     </p>

//     <p style={{ marginTop: '20px' }}>
//       From building secure, scalable web applications to crafting eye-catching brand identities, 
//       we approach every challenge with a growth mindset. At <strong>Millennial GFX</strong>, your goals are our blueprint, 
//       and your success is our mission.
//     </p>

//     <p style={{ marginTop: '20px' }}>
//       Ready to elevate your digital presence? Let’s create something impactful—together.
//     </p>

//     </div>
//   </main>
// );

// // Style objects
// const cardStyle = {
//   backgroundColor: '#111141',
//   padding: '24px',
//   borderRadius: '10px',
//   boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
//   color: '#ccc',
// };

// const cardTitle = {
//   color: '#fff',
//   marginBottom: '12px',
//   fontSize: '1.25rem',
// };

// const highlightCard = {
//   backgroundColor: '#0e0e2c',
//   border: '1px solid #292952',
//   borderRadius: '12px',
//   padding: '20px',
//   color: '#ddd',
//   transition: 'transform 0.3s ease',
//   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
// };

// const highlightTitle = {
//   color: '#ffd700',
//   fontSize: '1.1rem',
//   marginBottom: '10px',
// };

// export default About;


import React from 'react';

const About = () => (
  <main className="bg-[#0a0a36] text-white px-4 py-12 min-h-screen">
    <div className="max-w-screen-xl mx-auto space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">About Millennial GFX</h1>

      <p className="text-gray-300 text-base">
        At <strong>Millennial GFX</strong>, we are not just developers—we are digital architects. 
        Founded with a vision to empower businesses through innovation, we blend creativity, technology, 
        and strategy to deliver tailor-made solutions across industries.
      </p>

      <p className="text-gray-300 text-base">
        With expertise spanning <strong>software development</strong>, <strong>branding</strong>, 
        <strong>UI/UX design</strong>, and <strong>digital transformation</strong>, 
        our mission is to help businesses launch, grow, and lead in the digital space.
      </p>

      {/* Mission & Vision */}
      <div className="grid sm:grid-cols-2 gap-6 pt-6">
        <div className="bg-[#111141] p-6 rounded-lg shadow-lg text-gray-300">
          <h2 className="text-xl font-semibold text-white mb-2">Our Mission</h2>
          <p>
            To empower businesses through innovative technology solutions that simplify workflows,
            enhance customer experience, and drive measurable growth.
          </p>
        </div>
        <div className="bg-[#111141] p-6 rounded-lg shadow-lg text-gray-300">
          <h2 className="text-xl font-semibold text-white mb-2">Our Vision</h2>
          <p>
            To be a global leader in custom software and creative tech services, known for delivering
            impactful, design-led digital experiences.
          </p>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <h2 className="text-2xl font-bold pt-10">What Sets Us Apart</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "🎯 Purpose-Driven Design", text: "We don’t just build for looks—we build to solve real problems with thoughtful, strategic design." },
          { title: "🚀 Built for Scale", text: "Whether you're a startup or scaling enterprise, our solutions grow with your business." },
          { title: "💡 Innovation at Core", text: "We thrive on bold ideas and emerging technologies to keep your brand ahead of the curve." },
          { title: "🤝 Human-Centric", text: "We listen, collaborate, and deliver with empathy to build long-term partnerships—not just projects." },
          { title: "📈 Results-Focused", text: "Every design, line of code, and strategy we build is aligned with your business outcomes." },
          { title: "🛠️ Full-Cycle Delivery", text: "From concept to post-launch support, we handle the entire lifecycle so you can focus on growth." },
        ].map(({ title, text }) => (
          <div key={title} className="bg-[#0e0e2c] border border-[#292952] rounded-xl p-5 text-gray-300 shadow-lg hover:scale-[1.02] transition-transform">
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>

      {/* Closing Paragraphs */}
      <div className="space-y-4 text-gray-300 pt-10">
        <p>
          Whether you’re launching a startup or scaling an enterprise product, 
          <strong> Millennial GFX</strong> is your partner in creating meaningful digital experiences.
        </p>
        <p>
          Our multidisciplinary team brings together strategists, developers, designers, and analysts 
          who are passionate about crafting solutions that deliver real business results. We understand 
          that every brand has a unique story—and we’re here to bring yours to life with precision, creativity, 
          and technical excellence.
        </p>
        <p>
          From building secure, scalable web applications to crafting eye-catching brand identities, 
          we approach every challenge with a growth mindset. At <strong>Millennial GFX</strong>, your goals are our blueprint, 
          and your success is our mission.
        </p>
        <p>
          Ready to elevate your digital presence? Let’s create something impactful—together.
        </p>
      </div>
    </div>
  </main>
);

export default About;
