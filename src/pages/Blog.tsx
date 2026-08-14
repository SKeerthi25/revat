export default function Blog() {
  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">Photography Blog</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>Tips, stories, and behind-the-scenes from our shoots.</p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            {[
              {
                title: "5 Tips for a Stress-Free Wedding Day Timeline",
                category: "Weddings",
                date: "Aug 12, 2026",
                img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
                excerpt: "Planning your wedding day timeline is crucial for ensuring you get all the photos you want without feeling rushed. Here is our expert advice..."
              },
              {
                title: "Why Your Business Needs Professional Headshots",
                category: "Commercial",
                date: "Jul 28, 2026",
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
                excerpt: "In the digital age, your headshot is often your first impression. Learn why investing in professional corporate photography pays off."
              },
              {
                title: "Preparing Your Home for Real Estate Photography",
                category: "Real Estate",
                date: "Jul 15, 2026",
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
                excerpt: "Want your property to stand out on Zillow or Rightmove? Follow our comprehensive checklist to prep your house before the photographer arrives."
              },
              {
                title: "Golden Hour: The Secret to Magical Portraits",
                category: "Tips & Techniques",
                date: "Jun 30, 2026",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
                excerpt: "Discover why photographers are obsessed with the 'Golden Hour' and how scheduling your shoot around sunset guarantees stunning results."
              },
              {
                title: "Behind the Scenes: A Day in the Life of a Wedding Photographer",
                category: "Behind the Scenes",
                date: "Jun 10, 2026",
                img: "/about-image.png",
                excerpt: "Curious about what actually goes into shooting a 10-hour wedding? Join us behind the lens for a transparent look at our process."
              },
              {
                title: "What to Wear for Your Family Portrait Session",
                category: "Portraits",
                date: "May 22, 2026",
                img: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2?q=80&w=600&auto=format&fit=crop",
                excerpt: "Coordinating outfits for a family photo doesn't have to be a headache. Read our style guide for picking timeless, flattering clothing."
              }
            ].map((post, i) => (
              <div key={i} className="card flex flex-col" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={post.img} alt={post.title} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="flex justify-between items-center mb-2" style={{ fontSize: '0.875rem' }}>
                    <span className="text-accent" style={{ fontWeight: 600 }}>{post.category}</span>
                    <span className="text-light">{post.date}</span>
                  </div>
                  <h3 className="heading-md text-primary mb-2" style={{ fontSize: '1.25rem' }}>{post.title}</h3>
                  <p className="text-light mb-4" style={{ flex: 1 }}>{post.excerpt}</p>
                  <a href="#" className="text-primary" style={{ fontWeight: 600 }}>Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
