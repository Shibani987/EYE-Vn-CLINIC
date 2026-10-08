import { profileItems } from '../data/clinicData.js';

export default function Optometrist() {
  return (
    <section className="section-pad profile-section" id="optometrist">
      <div className="container profile-panel">
        <div>
          <p className="section-kicker">Professional profile</p>
          <h2>Optom. V. Raju</h2>
          <p className="profile-subtitle">Eye Care Specialist / Optometrist</p>
        </div>
        <ul className="credential-list" aria-label="Professional information">
          {profileItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
