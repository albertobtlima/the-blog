"use client";

import clsx from "clsx";

export function Header() {
  return (
    <h1
      className={clsx("text-4xl", "text-blue-500")}
      onClick={() => alert(2345678)}
    >
      Olá de page.tsx
    </h1>
  );
}
