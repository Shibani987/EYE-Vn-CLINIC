import { clinic } from '../data/clinicData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{clinic.name}</strong>
          <p>{clinic.type}</p>
          <p>{clinic.locationShort}</p>
        </div>
        <div>
          <p>Phone: <a href={clinic.phoneHref}>{clinic.phone}</a></p>
          <p>Website developed as an informational website for the clinic.</p>
        </div>
      </div>
      <div className="container footer-note">
        <p>Information on this website is provided for general informational purposes. Please consult a qualified eye-care professional for individual medical advice.</p>
        <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
