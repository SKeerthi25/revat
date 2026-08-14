export default function Portfolio() {
  const assetModules = import.meta.glob('../assets/image*.png', { eager: true, import: 'default' });
  const images = Object.values(assetModules) as string[];

  return (
    <div>
      <section className="section section-dark text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="heading-xl mb-4">Our Portfolio</h1>
          <p className="text-lg" style={{ opacity: 0.9 }}>A curated selection of our finest work across various disciplines.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '1rem' }}>
            {images.map((src, i) => (
              <div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '300px' }}>
                <img 
                  src={src} 
                  alt={`Portfolio item ${i + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
