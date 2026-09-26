export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Committees', href: '#committees' },
  { label: 'Technical Teams', href: '#teams' },
  { label: 'Events & Contests', href: '#events' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' }
];
