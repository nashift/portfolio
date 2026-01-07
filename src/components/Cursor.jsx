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

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-9999
        transition-transform duration-150 ease-out
        ${hover ? "scale-150 " : "scale-100"}`}
      style={{
        transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
      }}
    >
      <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
    </div>
  );
}
