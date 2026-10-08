import { clinic } from '../data/clinicData.js';

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container split">
        <div>
          <p className="section-kicker">About the clinic</p>
          <h2>About {clinic.name}</h2>
        </div>
        <div className="prose">
          <p>
            EYE Vn CLINIC is an eye testing and contact lens clinic located in Big Bazar,
            Berhampur, Odisha.
          </p>
          <p>
            The clinic provides vision testing, clinical optometry assessments, contact lens
            services, optical support, low-vision assistance and rehabilitation-related services.
          </p>
        </div>
      </div>
    </section>
  );
}
