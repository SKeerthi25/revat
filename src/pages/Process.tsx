import { CalendarCheck, Camera, Images, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Process() {
  const steps = [
    {
      icon: <Mail size={40} />,
      title: "1. Initial Consultation",
      desc: "We begin with a conversation about your vision, requirements, and the aesthetics you want to achieve. We'll discuss locations, dates, and finalize your booking."
    },
    {
      icon: <CalendarCheck size={40} />,
      title: "2. Preparation & Planning",
      desc: "Prior to the shoot, we provide a mood board, a shot list, and style guides to ensure everything runs flawlessly on the day of the event."
    },
    {
      icon: <Camera size={40} />,
      title: "3. The Shoot",
      desc: "Our team arrives early to set up lighting and equipment. We guide you through poses and capture both candid and directed shots in a relaxed environment."
    },
    {
      icon: <Images size={40} />,
      title: "4. Culling & Editing",
      desc: "We carefully review thousands of photos to select the absolute best. Each chosen image undergoes our signature color grading and high-end retouching."
    },
    {
      icon: <Star size={40} />,
      title: "5. Final Delivery",
      desc: "Your photos are delivered via a private, high-resolution online gallery where you can download, share, and order premium prints directly."
    }
  ];

  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">Our Process</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>From the first hello to the final gallery delivery.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={i} className="card flex items-start gap-6 flex-col-mobile" style={{ alignItems: 'center' }}>
                <div style={{ color: 'var(--accent-color)', backgroundColor: 'var(--bg-section)', padding: '1.5rem', borderRadius: '50%' }}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="heading-md text-primary mb-2">{step.title}</h3>
                  <p className="text-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h2 className="heading-lg text-primary mb-4">Ready to start?</h2>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
