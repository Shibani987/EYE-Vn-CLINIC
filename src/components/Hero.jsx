import { clinic } from '../data/clinicData.js';
import Icon from './Icon.jsx';

export default function Hero() {
  return (
    <section className="hero section-pad" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">{clinic.type}</p>
          <h1>{clinic.name}</h1>
          <p className="hero-lead">{clinic.tagline}</p>
          <p className="hero-location"><Icon name="location" size={20} /> {clinic.locationShort}</p>
          <p className="trust-line">{clinic.trustLine}</p>
          <div className="hero-actions">
            <a className="button primary" href={clinic.phoneHref}>
              <Icon name="phone" /> Contact Clinic
            </a>
            <a className="button secondary" href="#services">
              View Eye Tests <Icon name="arrow" />
            </a>
          </div>
        </div>
        <figure className="hero-media reveal delay-1">
          <img src={clinic.image} alt="EYE Vn CLINIC signboard in Berhampur" />
          <figcaption>Real clinic signage at Big Bazar, Berhampur</figcaption>
        </figure>
      </div>
    </section>
  );
}
