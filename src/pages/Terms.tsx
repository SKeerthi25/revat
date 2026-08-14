export default function Terms() {
  return (
    <div className="section section-light">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="heading-lg text-primary mb-6">Terms & Conditions</h1>
        <p className="mb-4 text-light">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="text-light" style={{ lineHeight: 1.8 }}>
          <p className="mb-4">Welcome to REVAT LTD. By using our website and booking our services, you agree to comply with and be bound by the following terms and conditions.</p>
          <h3 className="heading-md text-primary mt-8 mb-4">1. Booking and Deposits</h3>
          <p className="mb-4">A non-refundable deposit is required to secure your booking date. The remaining balance must be paid in full prior to the delivery of final images.</p>
          <h3 className="heading-md text-primary mt-8 mb-4">2. Copyright and Usage</h3>
          <p className="mb-4">REVAT LTD retains the copyright to all images. Clients are granted a license for personal use. Commercial usage requires a separate licensing agreement.</p>
        </div>
      </div>
    </div>
  );
}
