// const Services = () => (
//   <main>
//     <div className="container">
//       <h1>Our Expertise</h1>
//       <p>
//         At <strong>Millennial</strong>, we don't just build products—we build experiences. From concept to deployment,
//         our solutions are crafted to make your brand stand out, build trust, and grow business value.
//       </p>

//       <section style={{ marginTop: '40px' }}>
//         <h2>Core Offerings</h2>
//         <ul style={{ margin: '20px 0' }}>
//           <li>🧠 Brand Identity & Strategy</li>
//           <li>📦 Creative Packaging Design</li>
//           <li>💻 Web & App Development</li>
//           <li>🚀 Product Deployment</li>
//           <li>📣 Marketing & Lead Generation</li>
//         </ul>
//       </section>

//       <section style={{ marginTop: '60px' }}>
//         <h2>Project Highlights</h2>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//           gap: '20px',
//           marginTop: '20px'
//         }}>
//           <img src="/assets/156309960_280578803464447_8583655681892857497_n.jpg" alt="Branding Benefits" />
//           <img src="/assets/158184997_454863649050020_5110818677356080653_n.jpg" alt="Packaging Explanation" />
//           <img src="/assets/158473746_521319725516803_318154291288381614_n.jpg" alt="Why Packaging" />
//           <img src="/assets/158494648_930174064188188_2880076722509138344_n.jpg" alt="Branded Box" />
//           <img src="/assets/161709514_453893662578817_7589648370790999201_n.jpg" alt="We Design" />
//           <img src="/assets/161807943_199322444862593_2851604551565643586_n.jpg" alt="We Deploy" />
//           <img src="/assets/161912871_780577719217607_3448374822930755555_n.jpg" alt="We Develop" />
//           <img src="/assets/208759658_1091315038063247_8991884104028727952_n.jpg" alt="Work Setup" />
//           <img src="/assets/208962209_1224463524669357_6156370240195234487_n.jpg" alt="Stand Out Graphic" />
//           <img src="/assets/209000034_1870785843086135_616626550904577782_n.jpg" alt="Millennial Minimal" />
//         </div>
//       </section>
//     </div>
//   </main>
// );

// export default Services;


// import React from 'react';

// const Services = () => (
//   <main>
//     <div className="container">
//       <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>What We Do Best</h1>
//       <p style={{ color: '#ccc', fontSize: '1.05rem' }}>
//         From strategy to execution, <strong>Millennial GFX</strong> delivers high-impact solutions that power your business growth.
//       </p>
//       <p style={{ color: '#ccc', fontSize: '1.05rem' }}>
//         At <strong>Millennial GFX</strong>, we bring your vision to life with powerful digital tools. 
//         From MVPs to enterprise-scale solutions, we engineer custom systems that move businesses forward.At Millennial GFX, we partner with bold brands and visionary startups to build powerful digital experiences. 
//         Whether you're launching something new or reinventing something old, our job is to make your vision real—intelligently, beautifully, and fast.
//       </p>

//       <hr style={{ border: 'none', borderTop: '1px solid #444', margin: '30px 0' }} />

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//         gap: '30px',
//         marginBottom: '50px'
//       }}>
//         {services.map((service, i) => (
//           <div key={i} style={cardStyle}>
//             <div style={{ fontSize: '2rem' }}>{service.icon}</div>
//             <h3 style={{ color: '#ffd700', margin: '15px 0 10px' }}>{service.title}</h3>
//             <p style={{ color: '#ccc' }}>{service.description}</p>
//           </div>
//         ))}
//       </div>

//       <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Need a Custom Solution?</h2>
//       <p style={{ marginBottom: '20px', color: '#ccc' }}>
//         Whether you're launching a product or revamping your digital strategy, we tailor every solution to fit your needs.
//       </p>
//       <p style={{ marginBottom: '20px', color: '#ccc' }}>
//          Let’s create solutions that don’t just work—they make a difference. Start your journey with <strong>Millennial GFX</strong> today.
//       </p>
//       <a
//         href="/contact"
//         style={{
//           display: 'inline-block',
//           backgroundColor: '#ffd700',
//           color: '#0a0a36',
//           padding: '12px 20px',
//           borderRadius: '6px',
//           fontWeight: 'bold',
//           textDecoration: 'none'
//         }}
//       >
//         Let’s Build Together
//       </a>
//     </div>
//   </main>
// );

// const services = [
//   {
//     icon: '💻',
//     title: 'Custom Web Development',
//     description: 'Robust, scalable websites & web apps tailored for performance and growth.',
//   },
//   {
//     icon: '📱',
//     title: 'Mobile App Development',
//     description: 'iOS and Android apps built for experience, functionality, and scale.',
//   },
//   {
//     icon: '🎨',
//     title: 'UI/UX & Branding',
//     description: 'Designs that reflect your identity and create user delight across platforms.',
//   },
//   {
//     icon: '☁️',
//     title: 'Cloud & DevOps',
//     description: 'Modern infrastructure, CI/CD pipelines, and cloud-native scalability.',
//   },
//   {
//     icon: '🧠',
//     title: 'AI & Automation',
//     description: 'Integrate intelligence into your business with custom AI workflows.',
//   },
//   {
//     icon: '📈',
//     title: 'Digital Strategy',
//     description: 'Marketing, SEO & analytics to elevate your reach and engagement.',
//   }
// ];

// const cardStyle = {
//   backgroundColor: '#111141',
//   borderRadius: '12px',
//   padding: '20px',
//   boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
//   transition: 'transform 0.3s ease',
// };

// export default Services;







import React from 'react';

const Services = () => (
  <main className="bg-[#0a0a36] text-white px-4 py-12 min-h-screen">
    <div className="max-w-screen-xl mx-auto space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold">What We Do Best</h1>

      <p className="text-gray-300 text-base">
        From strategy to execution, <strong>Millennial GFX</strong> delivers high-impact solutions that power your business growth.
      </p>

      <p className="text-gray-300 text-base">
        At <strong>Millennial GFX</strong>, we bring your vision to life with powerful digital tools. From MVPs to enterprise-scale solutions, we engineer custom systems that move businesses forward. Whether you're launching something new or reinventing something old, our job is to make your vision real—intelligently, beautifully, and fast.
      </p>

      <hr className="border-t border-[#444] my-8" />

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#111141] p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Custom Solution CTA */}
      <div className="pt-10 space-y-4">
        <h2 className="text-2xl font-bold">Need a Custom Solution?</h2>
        <p className="text-gray-300">
          Whether you're launching a product or revamping your digital strategy, we tailor every solution to fit your needs.
        </p>
        <p className="text-gray-300">
          Let’s create solutions that don’t just work—they make a difference. Start your journey with <strong>Millennial GFX</strong> today.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-[#0a0a36] px-6 py-3 rounded font-bold hover:bg-yellow-300 transition"
        >
          Let’s Build Together
        </a>
      </div>
    </div>
  </main>
);

const services = [
  {
    icon: '💻',
    title: 'Custom Web Development',
    description: 'Robust, scalable websites & web apps tailored for performance and growth.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'iOS and Android apps built for experience, functionality, and scale.',
  },
  {
    icon: '🎨',
    title: 'UI/UX & Branding',
    description: 'Designs that reflect your identity and create user delight across platforms.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Modern infrastructure, CI/CD pipelines, and cloud-native scalability.',
  },
  {
    icon: '🧠',
    title: 'AI & Automation',
    description: 'Integrate intelligence into your business with custom AI workflows.',
  },
  {
    icon: '📈',
    title: 'Digital Strategy',
    description: 'Marketing, SEO & analytics to elevate your reach and engagement.',
  }
];

export default Services;


