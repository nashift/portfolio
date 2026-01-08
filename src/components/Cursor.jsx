import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    window.addEventListener("mousemove", move);

    const hoverTargets = document.querySelectorAll("a, button");
    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverTargets.forEach(el => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-9999
                 transition-transform duration-150 ease-out"
      style={{
        transform: `
          translate(${pos.x}px, ${pos.y}px)
          translate(-50%, -50%)
          scale(${hover ? 0.6  : 1})
        `,
      }}
    >
      <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
    </div>
  );
}
