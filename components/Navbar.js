const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-section py-6">
      <span className="text-heading text-body">Curren Hamlet</span>
      <ul className="flex gap-10">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-heading hover:opacity-60 transition-opacity"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
