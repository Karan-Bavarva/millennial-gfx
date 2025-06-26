import React from 'react';

const About = () => (
  <main>
    <div className="container">
      <h1>About Millennial GFX</h1>

      <p>
        At <strong>Millennial GFX</strong>, we are not just developers—we are digital architects. 
        Founded with a vision to empower businesses through innovation, we blend creativity, technology, 
        and strategy to deliver tailor-made solutions across industries.
      </p>

      <p>
        With expertise spanning <strong>software development</strong>, <strong>branding</strong>, 
        <strong>UI/UX design</strong>, and <strong>digital transformation</strong>, 
        our mission is to help businesses launch, grow, and lead in the digital space.
      </p>

      {/* Mission & Vision Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginTop: '40px'
      }}>
        <div style={cardStyle}>
          <h2 style={cardTitle}>Our Mission</h2>
          <p>
            To empower businesses through innovative technology solutions that simplify workflows,
            enhance customer experience, and drive measurable growth.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={cardTitle}>Our Vision</h2>
          <p>
            To be a global leader in custom software and creative tech services, known for delivering
            impactful, design-led digital experiences.
          </p>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <h2 style={{ marginTop: '60px', marginBottom: '20px' }}>What Sets Us Apart</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px'
      }}>
        <div style={highlightCard}>
          <h3 style={highlightTitle}>🎯 Purpose-Driven Design</h3>
          <p>We don’t just build for looks—we build to solve real problems with thoughtful, strategic design.</p>
        </div>
        <div style={highlightCard}>
          <h3 style={highlightTitle}>🚀 Built for Scale</h3>
          <p>Whether you're a startup or scaling enterprise, our solutions grow with your business.</p>
        </div>
        <div style={highlightCard}>
          <h3 style={highlightTitle}>💡 Innovation at Core</h3>
          <p>We thrive on bold ideas and emerging technologies to keep your brand ahead of the curve.</p>
        </div>
        <div style={highlightCard}>
          <h3 style={highlightTitle}>🤝 Human-Centric</h3>
          <p>We listen, collaborate, and deliver with empathy to build long-term partnerships—not just projects.</p>
        </div>
        <div style={highlightCard}>
          <h3 style={highlightTitle}>📈 Results-Focused</h3>
          <p>Every design, line of code, and strategy we build is aligned with your business outcomes.</p>
        </div>
        <div style={highlightCard}>
          <h3 style={highlightTitle}>🛠️ Full-Cycle Delivery</h3>
          <p>From concept to post-launch support, we handle the entire lifecycle so you can focus on growth.</p>
        </div>
      </div>

      <p style={{ marginTop: '60px' }}>
        Whether you’re launching a startup or scaling an enterprise product, 
        <strong> Millennial GFX</strong> is your partner in creating meaningful digital experiences.
      </p>

      <p style={{ marginTop: '30px' }}>
        Our multidisciplinary team brings together strategists, developers, designers, and analysts 
        who are passionate about crafting solutions that deliver real business results. We understand 
        that every brand has a unique story—and we’re here to bring yours to life with precision, creativity, 
        and technical excellence.
    </p>

    <p style={{ marginTop: '20px' }}>
      From building secure, scalable web applications to crafting eye-catching brand identities, 
      we approach every challenge with a growth mindset. At <strong>Millennial GFX</strong>, your goals are our blueprint, 
      and your success is our mission.
    </p>

    <p style={{ marginTop: '20px' }}>
      Ready to elevate your digital presence? Let’s create something impactful—together.
    </p>

    </div>
  </main>
);

// Style objects
const cardStyle = {
  backgroundColor: '#111141',
  padding: '24px',
  borderRadius: '10px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
  color: '#ccc',
};

const cardTitle = {
  color: '#fff',
  marginBottom: '12px',
  fontSize: '1.25rem',
};

const highlightCard = {
  backgroundColor: '#0e0e2c',
  border: '1px solid #292952',
  borderRadius: '12px',
  padding: '20px',
  color: '#ddd',
  transition: 'transform 0.3s ease',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
};

const highlightTitle = {
  color: '#ffd700',
  fontSize: '1.1rem',
  marginBottom: '10px',
};

export default About;
