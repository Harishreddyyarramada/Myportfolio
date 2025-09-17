import React from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      {/* Content */}
      <div className="relative bg-gray-900 text-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 sm:mx-auto p-6 z-10 overflow-y-auto max-h-[90vh]">
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">
      {children}
    </h2>
  );
}

export function DialogContent({ children }) {
  return <div className="mt-2 text-gray-300 text-sm sm:text-base">{children}</div>;
}

export function DialogFooter({ children }) {
  return <div className="mt-6 flex justify-end gap-3">{children}</div>;
}

// Example usage button
export function DialogButton({ children, onClick, variant = "solid" }) {
  const base = "font-semibold rounded-full py-2 px-4 sm:py-3 sm:px-6 transition-all duration-300";
  const style =
    variant === "solid"
      ? "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg"
      : "border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white";
  return (
    <button onClick={onClick} className={`${base} ${style}`}>
      {children}
    </button>
  );
}
