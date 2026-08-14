export default function FAQ() {
  const faqs = [
    { q: "How far in advance should we book?", a: "For weddings, we recommend booking 6-12 months in advance. For portraits and commercial shoots, 2-4 weeks is usually sufficient." },
    { q: "Do you travel for shoots?", a: "Yes, we cover all of London and surrounding areas. For travel outside the M25, a small travel fee may apply. We also offer destination wedding packages upon request." },
    { q: "When will we get our photos?", a: "Portrait and commercial galleries are typically delivered within 1-2 weeks. Weddings usually take 4-6 weeks to ensure meticulous editing and color grading." },
    { q: "Do we get the raw, unedited files?", a: "We take pride in our finished products, which includes our signature color grading and editing. For this reason, we do not provide RAW files, only high-resolution edited JPEGs." },
    { q: "What happens if it rains on the day of an outdoor shoot?", a: "If the weather doesn't cooperate, we are happy to reschedule portrait shoots at no extra charge. For weddings, we always bring lighting equipment and have creative indoor contingency plans ready." },
    { q: "Do you provide prints or albums?", a: "Yes! While all packages include digital delivery, we offer a range of premium albums, framed prints, and canvases which can be purchased directly through your private online gallery." },
    { q: "Is a deposit required to secure the date?", a: "Yes, a 25% non-refundable retainer is required to lock in your date, with the remaining balance due 14 days before the shoot." }
  ];

  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">Frequently Asked Questions</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>Everything you need to know about our process.</p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem' }}>
                <h3 className="heading-md text-primary mb-2">{faq.q}</h3>
                <p className="text-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
