"use client";

import React from "react";
import Icon from "./Icon";

export default function Modal({
  open,
  title,
  children,
  onClose,
  footer,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  footer?: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/20 p-4 sm:items-center">
      <div className="glass shadow-glass w-full max-w-xl p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="h2">{title}</h2>
          <button className="btn btn-ghost" onClick={onClose} type="button">
            <Icon name="close" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
        {footer ? <div className="mt-5 flex justify-end gap-2">{footer}</div> : null}
      </div>
    </div>
  );
}
