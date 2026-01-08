export default function ImageModal({ src, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-9998 flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div className="flex flex-col">
        <span className="text-lg">
          press <span className="border rounded px-2 py-1">esc</span> or here close
        </span>
        <img
          src={src}
          alt="Project Preview"
          className="max-h-[90vh] max-w-full rounded border border-neutral-700 mt-2"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
