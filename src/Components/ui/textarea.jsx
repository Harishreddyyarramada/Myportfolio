import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}
