"use client";

import { useMemo, useState } from "react";
import Icon from "./Icon";

const langs = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
];

export default function LangSwitcher() {
  const [lang, setLang] = useState("en");
  const current = useMemo(() => langs.find((l) => l.code === lang), [lang]);

  return (
    <button
      className="btn btn-ghost"
      type="button"
      onClick={() => setLang((p) => (p === "en" ? "th" : "en"))}
      aria-label="Switch language"
      title="Switch language (mock)"
    >
      <Icon name="settings" />
      {current?.label ?? "EN"}
    </button>
  );
}
