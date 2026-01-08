export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-neutral-800 bg-[#0d1117]/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-green-400 font-bold">portfoilio</span>
        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#stack" className="hover:text-green-400">Stack</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
