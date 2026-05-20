export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6">
      <span className="text-heading text-lg">Curren Hamlet</span>
      <ul className="flex gap-10">
        {["Work", "About", "Blog", "Services", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-heading hover:opacity-60 transition-opacity"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
