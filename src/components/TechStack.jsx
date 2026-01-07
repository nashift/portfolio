import Reveal from "./Reveal";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const stack = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git & GitHub", icon: <SiGit /> },
];

export default function TechStack() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-32">
      <Reveal>
        <h2 className="text-3xl mb-10">&gt; Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 border border-neutral-800 bg-[#161b22] p-5 rounded"
            >
              <span className="text-green-400 text-xl">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
