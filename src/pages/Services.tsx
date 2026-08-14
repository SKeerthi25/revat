import { Camera, Users, Building, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "weddings",
    title: "Wedding Photography",
    icon: <Users size={40} />,
    desc: "From the quiet moments of preparation to the joyous celebrations, our wedding photography packages are designed to capture the authentic emotion of your big day. We offer both unobtrusive documentary style and traditional portraiture.",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "portraits",
    title: "Portrait & Family",
    icon: <Camera size={40} />,
    desc: "Whether in our studio or on location, we create relaxed, natural portraits that let your personality shine. Perfect for family albums, professional headshots, or creative modeling portfolios.",
    img: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "commercial",
    title: "Commercial & Product",
    icon: <Building size={40} />,
    desc: "Elevate your brand's visual identity with high-end commercial imagery. From crisp e-commerce product shots on white backgrounds to dynamic lifestyle marketing photography.",
    img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: <Video size={40} />,
    desc: "Help properties sell faster with bright, wide-angle interior photography and stunning exterior twilight shots. Drone photography available upon request.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">Our Services</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>Professional photography tailored to your exact needs.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2 gap-8">
            {services.map((svc) => (
              <div key={svc.id} className="card flex flex-col" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={svc.img} alt={svc.title} style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="heading-md text-primary">{svc.title}</h3>
                    <div style={{ color: 'var(--accent-color)' }}>{svc.icon}</div>
                  </div>
                  <p className="text-light mb-6" style={{ flex: 1 }}>{svc.desc}</p>
                  <div className="flex justify-end items-center" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <Link to="/contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
