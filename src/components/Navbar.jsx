import { useEffect, useState } from 'react';
import { clinic, navItems } from '../data/clinicData.js';
import Icon from './Icon.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="EYE Vn CLINIC home">
          <span className="brand-mark"><Icon name="eye" size={25} /></span>
          <span>{clinic.name}</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`} id="primary-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
