export default function PrivacyPolicy() {
  return (
    <div className="section section-light">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="heading-lg text-primary mb-6">Privacy Policy</h1>
        <p className="mb-4 text-light">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="text-light" style={{ lineHeight: 1.8 }}>
          <p className="mb-4">At REVAT LTD, we are committed to protecting your privacy and ensuring the security of your personal data in accordance with the UK General Data Protection Regulation (UK GDPR).</p>
          <h3 className="heading-md text-primary mt-8 mb-4">1. Information We Collect</h3>
          <p className="mb-4">We collect information you provide directly to us, such as when you fill out a contact form, book a session, or subscribe to our newsletter. This may include your name, email address, phone number, and details about your event.</p>
          <h3 className="heading-md text-primary mt-8 mb-4">2. How We Use Your Information</h3>
          <p className="mb-4">We use your information to communicate with you, process bookings, deliver our photography services, and send relevant updates.</p>
        </div>
      </div>
    </div>
  );
}
