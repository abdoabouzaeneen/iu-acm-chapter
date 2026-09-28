export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Committees', href: '/#committees' },
  { label: 'Technical Teams', href: '/#teams' },
  { label: 'Up Next', href: '/up-next' },
  { label: 'Our Journey', href: '/journey' },
  { label: 'FAQ', href: '/#faq' }
];
