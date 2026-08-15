import { Mail, Phone, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    
    emailjs.sendForm('service_krfs3vr', 'template_k1z52u9', form.current, 'QrQx-xWydAfMZNM4D')
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">Contact Us</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>Let's talk about your next project.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2 gap-8">
            <div>
              <h2 className="heading-lg text-primary mb-6">Get in Touch</h2>
              <div className="card mb-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-section)', borderRadius: 'var(--radius-full)', color: 'var(--accent-color)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontWeight: 600 }}>Visit Us</h4>
                    <p className="text-light">60a Central Parade, New Addington,<br/>Croydon, CR0 0JD, UK</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-section)', borderRadius: 'var(--radius-full)', color: 'var(--accent-color)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontWeight: 600 }}>Call Us</h4>
                    <p className="text-light">07771 078478</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-section)', borderRadius: 'var(--radius-full)', color: 'var(--accent-color)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontWeight: 600 }}>Email Us</h4>
                    <p className="text-light">photo@revatltd.com</p>
                  </div>
                </div>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden', height: '300px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19927.954203649857!2d-0.01633512217631326!3d51.34027731215167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ff75e2f75471%3A0xcdaaa37279da152a!2s60a%20Central%20Parade%2C%20New%20Addington%2C%20Croydon%20CR0%200JD%2C%20UK!5e0!3m2!1sen!2sus!4v1714589000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="REVAT LTD Location Map"
                ></iframe>
              </div>
            </div>

            <div className="card">
              <h3 className="heading-md text-primary mb-6">Send a Message</h3>
              <form ref={form} className="flex flex-col gap-4" onSubmit={sendEmail}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                  <input type="text" name="user_name" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} placeholder="John Doe" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                  <input type="email" name="user_email" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} placeholder="john@example.com" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Service / Event</label>
                  <select name="service" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <option>Wedding Photography</option>
                    <option>Portrait & Family</option>
                    <option>Corporate Headshots</option>
                    <option>General Event Coverage</option>
                    <option>Birthday Parties</option>
                    <option>Anniversaries</option>
                    <option>Conferences & Seminars</option>
                    <option>Music Concerts / Festivals</option>
                    <option>Product Photography</option>
                    <option>Commercial & PR</option>
                    <option>Real Estate</option>
                    <option>Photo Editing / Retouching</option>
                    <option>Studio Booking</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                  <textarea name="message" required rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', resize: 'vertical' }} placeholder="Tell us about your event..."></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
                {submitStatus === 'success' && <p style={{ color: 'green', marginTop: '0.5rem', textAlign: 'center' }}>Message sent successfully!</p>}
                {submitStatus === 'error' && <p style={{ color: 'red', marginTop: '0.5rem', textAlign: 'center' }}>Failed to send message. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
