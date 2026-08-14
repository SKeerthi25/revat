import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "Sarah & James", text: "REVAT LTD captured our wedding beautifully. They were unobtrusive and delivered stunning photos.", rating: 5 },
    { name: "TechCorp Inc.", text: "Highly professional corporate headshots. The turnaround time was incredibly fast.", rating: 5 },
    { name: "Emily R.", text: "Our family portraits turned out amazing! The photographer made my kids feel so comfortable.", rating: 5 }
  ];

  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">Client Reviews</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>Don't just take our word for it.</p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            {reviews.map((r, i) => (
              <div key={i} className="card">
                <div className="flex gap-1 mb-4" style={{ color: 'var(--accent-color)' }}>
                  {[...Array(r.rating)].map((_, j) => <Star key={j} fill="currentColor" size={20} />)}
                </div>
                <p className="mb-4" style={{ fontStyle: 'italic' }}>"{r.text}"</p>
                <div className="font-bold text-primary">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
