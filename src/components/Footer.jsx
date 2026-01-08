import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-8
                      flex flex-col sm:flex-row
                      justify-between items-center gap-4
                      text-sm text-neutral-500">
        
        <span>
          © {new Date().getFullYear()} Nashif
        </span>

        <a
          href="https://github.com/nashif-dev"
          target="_blank"
          className="flex items-center gap-2 hover:text-green-400"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </footer>
  );
}
