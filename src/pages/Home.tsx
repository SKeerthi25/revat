import { Link } from 'react-router-dom';
import { Camera, Image as ImageIcon, Users, Building, Video, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section section-dark text-center" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, backgroundImage: 'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="heading-xl mb-4">Capturing Moments.<br/><span className="text-accent">Creating Memories.</span></h1>
          <p className="text-lg mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Professional photography services tailored for your unique needs. We bring your vision to life with precision and creativity.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn btn-accent">Book a Session</Link>
            <Link to="/portfolio" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>View Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="heading-lg text-primary">Our Expertise</h2>
            <p className="text-light text-lg">Comprehensive photography solutions for every occasion.</p>
          </div>
          
          <div className="grid grid-3">
            {[
              { icon: <Users size={32} />, title: "Weddings & Events", desc: "Immortalize your special day with our comprehensive event coverage." },
              { icon: <Camera size={32} />, title: "Portraits & Family", desc: "Capture the essence of your loved ones with stunning portraiture." },
              { icon: <Building size={32} />, title: "Commercial & PR", desc: "Elevate your brand with professional corporate imagery." },
              { icon: <ImageIcon size={32} />, title: "Product Photography", desc: "Showcase your products in the best light to drive sales." },
              { icon: <Video size={32} />, title: "Real Estate", desc: "Highlight properties with wide-angle and drone photography." },
              { icon: <CheckCircle2 size={32} />, title: "Photo Editing", desc: "Expert retouching and color grading services." }
            ].map((service, idx) => (
              <div key={idx} className="card text-center">
                <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  {service.icon}
                </div>
                <h3 className="heading-md text-primary mb-2">{service.title}</h3>
                <p className="text-light mb-4">{service.desc}</p>
                <Link to="/services" className="text-accent flex justify-center items-center gap-2" style={{ fontWeight: 600 }}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-grey">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div>
              <h2 className="heading-lg text-primary mb-4">Why Choose REVAT LTD?</h2>
              <p className="text-light mb-6">
                With years of experience behind the lens, we understand that every client is unique. We combine technical expertise with creative vision to deliver outstanding results.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Over a decade of professional experience",
                  "State-of-the-art photography equipment",
                  "Fast turnaround times for edited galleries",
                  "Customized packages to fit your budget"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 mb-4">
                    <CheckCircle2 color="var(--accent-color)" size={24} />
                    <span style={{ fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-2">
              <div className="card text-center" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                <div className="text-accent mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Our Services</div>
                <div>End-to-End Solutions</div>
              </div>
              <div className="card text-center">
                <div className="text-primary mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Quality First</div>
                <div className="text-light">Professional Standards</div>
              </div>
              <div className="card text-center">
                <div className="text-primary mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Fast Delivery</div>
                <div className="text-light">On-Time Completion</div>
              </div>
              <div className="card text-center" style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}>
                <div className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Trusted Work</div>
                <div>Reliable & Professional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '6rem 0' }}>
        <div className="container">
          <h2 className="heading-lg mb-4">Ready to Create Something Beautiful?</h2>
          <p className="text-lg mb-8" style={{ opacity: 0.9 }}>Contact us today to discuss your photography needs and get a custom quote.</p>
          <Link to="/contact" className="btn btn-accent" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Get a Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}
