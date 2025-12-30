import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`glass shadow-glass p-5 sm:p-6 ${className}`}>
      {children}
    </section>
  );
}
