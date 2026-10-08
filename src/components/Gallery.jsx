import { useEffect, useState } from 'react';
import { galleryImages } from '../data/clinicData.js';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section className="gallery section-pad" id="gallery">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Photo gallery</p>
          <h2>Clinic identity and location</h2>
          <p>More clinic photos can be added here when available.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <button className="gallery-item" key={image.src} type="button" onClick={() => setActiveImage(image)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>{image.caption}</span>
            </button>
          ))}
        </div>
      </div>
      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.caption} onClick={() => setActiveImage(null)}>
          <button className="lightbox-close" type="button" aria-label="Close image preview" onClick={() => setActiveImage(null)}>
            Close
          </button>
          <img src={activeImage.src} alt={activeImage.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
