// Icon library — a curated subset of Lucide, exposed as React components.
// All icons inherit currentColor and use 1.75 stroke per Airmap's icon rules.
const I = ({ d, children, size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);

const Icon = {
  Search:  (p) => <I {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></I>,
  Plus:    (p) => <I {...p} d="M12 5v14M5 12h14"/>,
  Check:   (p) => <I {...p} d="M20 6 9 17l-5-5"/>,
  X:       (p) => <I {...p} d="M18 6 6 18M6 6l12 12"/>,
  File:    (p) => <I {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></I>,
  Grid:    (p) => <I {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></I>,
  Book:    (p) => <I {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></I>,
  Settings:(p) => <I {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></I>,
  Msg:     (p) => <I {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></I>,
  Info:    (p) => <I {...p}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h0"/></I>,
  Gem:     (p) => <I {...p}><path d="M6 3h12l4 6-10 13L2 9z"/></I>,
  Edit:    (p) => <I {...p} d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"/>,
  Clock:   (p) => <I {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></I>,
  Users:   (p) => <I {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></I>,
  Layers:  (p) => <I {...p}><path d="m12 2 10 6-10 6L2 8z"/><path d="m2 16 10 6 10-6M2 12l10 6 10-6"/></I>,
  Menu:    (p) => <I {...p} d="M3 12h18M3 6h18M3 18h18"/>,
  Chev:    (p) => <I {...p} d="m6 9 6 6 6-6"/>,
  ChevL:   (p) => <I {...p} d="m15 6-6 6 6 6"/>,
  ChevR:   (p) => <I {...p} d="m9 6 6 6-6 6"/>,
  Sparkle: (p) => <I {...p}><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"/></I>,
  Send:    (p) => <I {...p}><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></I>,
  Pin:     (p) => <I {...p}><path d="M12 17v5M9 10.76V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4.76a2 2 0 0 0 1.11 1.79l1.78.9A2 2 0 0 1 19 15.24V16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-.76a2 2 0 0 1 1.11-1.79l1.78-.9A2 2 0 0 0 9 10.76Z"/></I>,
  Bolt:    (p) => <I {...p} d="M13 2 3 14h9l-1 8 10-12h-9z"/>,
  At:      (p) => <I {...p}><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></I>,
  Share:   (p) => <I {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></I>,
  History: (p) => <I {...p}><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></I>,
  MoreH:   (p) => <I {...p}><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></I>,
  Panel:   (p) => <I {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18"/></I>,
  Bell:    (p) => <I {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></I>,
};

window.Icon = Icon;
