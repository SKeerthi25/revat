import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">About REVAT LTD</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>Your trusted photography partners since 1987.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div>
              <img 
                src="/about-image.png" 
                alt="Photographer holding camera" 
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} 
              />
            </div>
            <div>
              <h2 className="heading-lg text-primary mb-4">Our Story</h2>
              <p className="text-light mb-4">
                Founded with a passion for visual storytelling, REVAT LTD has grown from a small local studio to a comprehensive photography agency serving Croydon, London, and beyond.
              </p>
              <p className="text-light mb-6">
                Our mission is simple: to capture your most important moments and translate them into timeless imagery. Whether it's the joy of a wedding day, the professionalism of a corporate event, or the sleek lines of a new product, we bring dedication and artistic vision to every project.
              </p>
              <div className="grid grid-2 gap-4">
                {[
                  "Award-winning photographers",
                  "Fully insured and certified",
                  "State-of-the-art studio",
                  "Client-first approach"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 color="var(--accent-color)" size={20} />
                    <span style={{ fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
