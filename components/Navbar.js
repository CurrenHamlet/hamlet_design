export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-6 bg-[#F5F1E8]">
      <span className="text-[#1C3320] font-semibold text-lg">
        Curren Hamlet
      </span>
      <ul className="flex gap-10">
        {["Work", "About", "Blog", "Services", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[#1C3320] hover:opacity-60 transition-opacity"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
