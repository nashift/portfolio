import Reveal from "./Reveal";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-32">
      <Reveal>
        <h2 className="text-3xl mb-8">&gt; Contact</h2>

        <div className="space-y-4 text-neutral-400">
          <a href="mailto:nashif104@gmail.com" 
          className="flex items-center gap-3  hover:text-green-400">
            <FaEnvelope className="text-green-400" />
            nashif@gmail.com
          </a>

          <a href="https://github.com/nashif-dev" 
          className="flex items-center gap-3  hover:text-green-400">
            <FaGithub className="text-green-400" />
            github.com/nashif-dev
          </a>
        </div>
      </Reveal>
    </section>
  );
}
