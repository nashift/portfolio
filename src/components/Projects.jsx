import { useState } from "react";
import Reveal from "./Reveal";
import ImageModal from "./ImageModal";

const projects = [
  {
    title: "Tool Rental Management System",
    desc: "Role-based MERN application with user, company, and admin flows. Includes authentication, image uploads, and approvals.",
    tech: ["React", "Node", "Express", "MongoDB"],
    image: "/p2.png",
  },
  {
    title: "Currency Counter",
    desc: "Logic-based JavaScript application to track denominations, calculate totals, and set financial targets.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/p1.png",
  },
];

export default function Projects() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      <Reveal>
        <h2 className="text-3xl mb-10">&gt; Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-neutral-800 bg-[#161b22] rounded overflow-hidden"
            >
              {/* Screenshot */}
              <div
                className="cursor-pointer group"
                onClick={() => setActiveImage(p.image)}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-green-400 text-xl font-semibold">
                  {p.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="border border-neutral-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {activeImage && (
        <ImageModal
          src={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}
