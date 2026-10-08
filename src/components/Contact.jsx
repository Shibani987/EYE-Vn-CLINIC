import { clinic } from '../data/clinicData.js';
import Icon from './Icon.jsx';

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">Location and contact</p>
          <h2>Visit or contact the clinic</h2>
          <address>
            {clinic.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <p className="timing">Clinic timings: Please contact the clinic</p>
        </div>
        <div className="contact-card" aria-label="Clinic contact actions">
          <a className="button primary" href={clinic.phoneHref}>
            <Icon name="phone" /> Call {clinic.phone}
          </a>
          <a className="button whatsapp" href={clinic.whatsappHref} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" /> WhatsApp
          </a>
          <a className="button secondary" href={clinic.mapsHref} target="_blank" rel="noreferrer">
            <Icon name="location" /> Open Map Search
          </a>
        </div>
      </div>
    </section>
  );
}
