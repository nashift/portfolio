export default function ImageModal({ src, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-9998 flex items-center justify-center px-6"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Project Preview"
        className="max-h-[90vh] max-w-full rounded border border-neutral-700"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
