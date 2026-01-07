import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <Reveal>
        <h2 className="text-3xl mb-8 border-l-4 border-green-400 pl-4">
          About Me
        </h2>

        <div className="max-w-3xl space-y-6 text-neutral-400 leading-relaxed">
          <p>
            I am a Full Stack Developer focused on building clean, scalable,
            and maintainable web applications.
          </p>

          <p>
            I enjoy understanding how systems work internally — from frontend
            rendering to backend logic and database design.
          </p>

          <p>
            My goal is to build software that is simple to use, easy to
            maintain, and logically structured.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
