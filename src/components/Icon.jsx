import React from 'react';

const paths = {
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  focus: <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M9 12h6" />,
  lens: <path d="M7 4c4 2 6 2 10 0 2 5 2 11 0 16-4-2-6-2-10 0-2-5-2-11 0-16Z" />,
  scope: <path d="M7 4h10M9 4v6a3 3 0 0 0 6 0V4M12 13v7M8 20h8" />,
  binocular: <path d="M7 7h3l2 5 2-5h3l3 10a2 2 0 0 1-2 3h-2a2 2 0 0 1-2-2v-3h-4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-3L7 7Z" />,
  align: <path d="M4 7h16M7 12h10M10 17h4" />,
  clipboard: <path d="M9 4h6l1 2h2a1 1 0 0 1 1 1v13H5V7a1 1 0 0 1 1-1h2l1-2ZM9 11h6M9 15h4" />,
  assist: <path d="M12 4v16M6 8h12M7 15l5 5 5-5" />,
  hands: <path d="M7 11V5a2 2 0 0 1 4 0v5M13 11V5a2 2 0 0 1 4 0v8a7 7 0 0 1-14 0v-1a2 2 0 0 1 4 0" />,
  circle: <circle cx="12" cy="12" r="8" />,
  disc: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12h8" />
    </>
  ),
  glasses: <path d="M4 13h3a3 3 0 0 1 6 0h-2a1 1 0 0 0-2 0H4Zm7 0h2a3 3 0 0 1 6 0h-5a1 1 0 0 0-2 0Zm-7 0 2-5M20 13l-2-5" />,
  chat: <path d="M5 6h14v10H8l-3 3V6ZM8 10h8M8 13h5" />,
  phone: <path d="M7 4h4l1 5-2 1a12 12 0 0 0 5 5l1-2 5 1v4c0 1-1 2-2 2A15 15 0 0 1 5 6c0-1 1-2 2-2Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  location: <path d="M12 21s7-5 7-12a7 7 0 0 0-14 0c0 7 7 12 7 12Z M12 9.5v.01" />,
  whatsapp: <path d="M6 19 7.2 15.5A8 8 0 1 1 10 18.1L6 19ZM9.5 8.8c.3 2.4 2.1 4.2 4.6 4.8l1.2-1.1 2 .6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {paths[name] ?? paths.eye}
      </g>
    </svg>
  );
}
