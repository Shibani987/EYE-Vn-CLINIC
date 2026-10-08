import { serviceGroups } from '../data/clinicData.js';
import Icon from './Icon.jsx';

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Eye tests and services</p>
          <h2>Focused care for everyday vision needs</h2>
          <p>
            Precision eye testing with clinical assessment beyond basic computer-based screening.
          </p>
        </div>
        <div className="service-groups">
          {serviceGroups.map((group) => (
            <section className="service-group" key={group.title} aria-labelledby={group.title.replaceAll(' ', '-')}>
              <h3 id={group.title.replaceAll(' ', '-')}>{group.title}</h3>
              <div className="service-grid">
                {group.services.map((service) => (
                  <article className="service-card" key={service.title}>
                    <span className="service-icon"><Icon name={service.icon} /></span>
                    <div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
