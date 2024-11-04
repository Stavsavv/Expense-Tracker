function Panel({ show, onClose, children }) {
  if (!show) return null;
  return (
    <>
      <div className="fixed inset-0 z-30 bg-black bg-opacity-50" />

      <div className="fixed inset-0 z-40 flex items-center justify-center">
        <div className="w-full max-w-2xl h-[80vh] bg-slate-800 rounded-3xl p-6 shadow-lg">
          <button
            onClick={() => onClose(false)}
            className="w-10 h-10 mb-4 font-bold rounded-full bg-slate-600 text-white"
            aria-label="Close Panel"
          >
            X
          </button>
          {children}
        </div>
      </div>
    </>
  );
}

export default Panel;
