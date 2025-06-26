// const Portfolio = () => (
//   <main>
//     <div className="container">
//       <h1>Our Portfolio</h1>
//       <p>We build brands that matter. Below are some of our featured projects, each tailored to the client's unique identity and goals.</p>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//         gap: '30px',
//         marginTop: '40px'
//       }}>
//         {[
//           {
//             title: 'Brand Identity: LuxeCo',
//             description: 'A premium cosmetics brand we helped define visually and digitally.',
//             image: '/assets/158494648_930174064188188_2880076722509138344_n.jpg'
//           },
//           {
//             title: 'Packaging: GreenEarth',
//             description: 'Eco-conscious packaging design for an organic product line.',
//             image: '/assets/158473746_521319725516803_318154291288381614_n.jpg'
//           },
//           {
//             title: 'Web Development: Finlite',
//             description: 'A clean and responsive website built for a fintech startup.',
//             image: '/assets/161912871_780577719217607_3448374822930755555_n.jpg'
//           },
//           {
//             title: 'Creative Design: MotionX',
//             description: 'Bold visual storytelling through digital art and motion design.',
//             image: '/assets/161807943_199322444862593_2851604551565643586_n.jpg'
//           },
//           {
//             title: 'Marketing: Jumpstart',
//             description: 'Lead-generation strategy for a SaaS accelerator program.',
//             image: '/assets/208759658_1091315038063247_8991884104028727952_n.jpg'
//           },
//           {
//             title: 'UI/UX: HealthSync',
//             description: 'Modern UI/UX design for a cross-platform healthcare app.',
//             image: '/assets/208962209_1224463524669357_6156370240195234487_n.jpg'
//           }
//         ].map((project, idx) => (
//           <div key={idx} style={{
//             backgroundColor: '#111141',
//             borderRadius: '12px',
//             padding: '20px',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//             animation: 'fadeIn 0.6s ease'
//           }}>
//             <img src={project.image} alt={project.title} style={{
//               borderRadius: '8px',
//               marginBottom: '15px',
//               width: '100%'
//             }} />
//             <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>{project.title}</h3>
//             <p style={{ color: '#ccc', fontSize: '0.95rem' }}>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </main>
// );

// export default Portfolio;




import React from 'react';

const Portfolio = () => (
  <main>
    <div className="container">
      {/* Hero Intro */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '12px', color: '#fff' }}>
          Our Work Speaks for Itself
        </h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>
          A curated collection of digital experiences crafted by <strong>Millennial GFX</strong>.
        </p>
      </section>

      {/* Project Showcase Grid */}
      <section style={gridStyle}>
        {projects.map((item, i) => (
          <div key={i} style={cardStyle}>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <div style={contentStyle}>
              <h3 style={titleStyle}>{item.title}</h3>
              <p style={descStyle}>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Closing CTA */}
      <section style={{ textAlign: 'center', marginTop: '60px' }}>
        <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '10px' }}>
          Let’s Build Something Remarkable
        </h2>
        <p style={{ color: '#bbb', marginBottom: '20px' }}>
          Have an idea? Let's transform it into a world-class product.
        </p>
        <a
          href="/contact"
          style={{
            backgroundColor: '#ffd700',
            color: '#0a0a36',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Start Your Project →
        </a>
      </section>
    </div>
  </main>
);

// Project Data
const projects = [
  {
    title: 'Brand Identity – LuxeCo',
    description: 'Elegant design system and product visuals for a luxury skincare brand.',
    image: '/assets/158494648_930174064188188_2880076722509138344_n.jpg',
  },
  {
    title: 'Packaging – GreenEarth',
    description: 'Sustainable packaging with a bold eco-minimalist design.',
    image: '/assets/158473746_521319725516803_318154291288381614_n.jpg',
  },
  {
    title: 'Web Platform – Finlite',
    description: 'Modern UI and API architecture for a fintech dashboard experience.',
    image: '/assets/161912871_780577719217607_3448374822930755555_n.jpg',
  },
  {
    title: 'MotionX Agency Website',
    description: 'Dynamic animations and scroll effects for a creative media house.',
    image: '/assets/161807943_199322444862593_2851604551565643586_n.jpg',
  },
  {
    title: 'UI/UX: HealthSync',
    description: 'Modern UI/UX design for a cross-platform healthcare app.',
    image: '/assets/208962209_1224463524669357_6156370240195234487_n.jpg'
  },
  {
    title: 'Marketing: Jumpstart',
    description: 'Lead-generation strategy for a SaaS accelerator program.',
    image: '/assets/208759658_1091315038063247_8991884104028727952_n.jpg'
  },
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
};

const cardStyle = {
  backgroundColor: '#111141',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
  transition: 'transform 0.3s ease',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  display: 'block',
};

const contentStyle = {
  padding: '20px',
};

const titleStyle = {
  color: '#ffd700',
  marginBottom: '10px',
  fontSize: '1.1rem',
};

const descStyle = {
  color: '#ccc',
  fontSize: '0.95rem',
};

export default Portfolio;






