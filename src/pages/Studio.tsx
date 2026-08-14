import { Camera, Maximize, Sun, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Studio() {
  const features = [
    {
      icon: <Maximize size={40} />,
      title: "Spacious Infinity Cove",
      desc: "Our large white infinity cove is perfect for fashion lookbooks, commercial product shoots, and clean portraiture. It provides a seamless, distraction-free background."
    },
    {
      icon: <Sun size={40} />,
      title: "Abundant Natural Light",
      desc: "South-facing floor-to-ceiling windows flood the studio with beautiful, diffused natural light throughout the day, ideal for soft, organic aesthetics."
    },
    {
      icon: <Zap size={40} />,
      title: "Profoto Lighting Gear",
      desc: "We exclusively use top-of-the-line Profoto strobes, softboxes, and light shapers. Whether you want dramatic shadows or high-key brightness, we have the tools."
    },
    {
      icon: <Camera size={40} />,
      title: "Client Lounge & Vanity",
      desc: "A comfortable dedicated space for hair, makeup, and wardrobe changes, complete with a clothing rack, steamer, and a relaxing seating area with refreshments."
    }
  ];

  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">Our Studio Space</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>A creative haven located in the heart of Croydon.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2 items-center mb-12">
            <div>
              <h2 className="heading-lg text-primary mb-4">Designed for Creativity</h2>
              <p className="text-light mb-6">
                Our 1,500 sq ft photography studio was custom-built to provide the perfect environment for both photographers and clients. It's a versatile space that transforms easily to suit any brief.
              </p>
              <Link to="/contact" className="btn btn-primary">Book a Studio Tour</Link>
            </div>
            <div className="grid grid-2" style={{ gap: '1rem' }}>
              <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop" alt="Studio Setup" style={{ borderRadius: 'var(--radius-md)', height: '200px', objectFit: 'cover' }} />
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop" alt="Camera Gear" style={{ borderRadius: 'var(--radius-md)', height: '200px', objectFit: 'cover' }} />
            </div>
          </div>

          <h2 className="heading-lg text-primary text-center mb-8">Studio Features</h2>
          <div className="grid grid-2">
            {features.map((feature, i) => (
              <div key={i} className="card flex gap-4 flex-col-mobile" style={{ alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-color)' }}>{feature.icon}</div>
                <div>
                  <h3 className="heading-md text-primary mb-2" style={{ fontSize: '1.25rem' }}>{feature.title}</h3>
                  <p className="text-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
