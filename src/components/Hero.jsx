import Reveal from "./Reveal";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex  items-center justify-center px-6 pt-24">
      <Reveal>
        <div className="text-center space-y-8">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl mb-2
                      font-semibold
                      tracking-tight
                    text-green-400"
          >
            Nashif
          </h1>
          <div className="mx-auto w-60 h-0.5 bg-green-400/60" />


          <p className="text-lg sm:text-xl text-neutral-300 tracking-wide">Full Stack Developer</p>

          <p className="text-sm text-neutral-500  transition-all">
            coding is my superpower
            <span className="hover:animate-spin transition-all">🚀</span>
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/nashif-dev"
              target="_blank"
              className="text-neutral-400 hover:text-green-400 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nashif-t-587713320"
              target="_blank"
              className="text-neutral-400 hover:text-green-400 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/918590319905"
              target="_blank"
              className="text-neutral-400 hover:text-green-400 text-xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/nashif.me"
              target="_blank"
              className="text-neutral-400 hover:text-green-400 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
