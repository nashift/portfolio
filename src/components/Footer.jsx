import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20 ">
      <div className="max-w-6xl mx-auto px-6 py-5
                      flex justify-between items-center
                      text-sm text-neutral-500 ">
        
        <span> &copy; {new Date().getFullYear()} Nashif</span>

        <a
          href="https://github.com/nashift"
          target="_blank"
          className="flex items-center gap-2 hover:text-green-400">
          <FaGithub /> GitHub
        </a>
      </div>
    </footer>
  );
}
