"use client";

import React from "react";
import Icon from "./Icon";

export type ToastKind = "success" | "error" | "info";

export default function Toast({
  open,
  kind,
  title,
  message,
  onClose,
}: {
  open: boolean;
  kind: ToastKind;
  title: string;
  message?: string;
  onClose: () => void;
}) {
  if (!open) return null;

  const icon =
    kind === "success" ? "check" : kind === "error" ? "close" : "info";

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[min(520px,calc(100%-24px))] -translate-x-1/2">
      <div className="glass shadow-glass flex items-start gap-3 p-4">
        <div className="mt-0.5">
          <Icon name={icon as any} />
        </div>
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
          {message ? <div className="text-sm text-black/60">{message}</div> : null}
        </div>
        <button className="btn btn-ghost" onClick={onClose} type="button">
          <Icon name="close" />
        </button>
      </div>
    </div>
  );
}
