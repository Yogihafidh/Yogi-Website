"use client";

import { PropsWithChildren, useState } from "react";

export const TextExpander = ({
  children,
}: PropsWithChildren<{ children: string }>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : `${children}`.split(" ").slice(0, 40).join(" ") + "...";
  return (
    <span>
      {displayText}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="border-b border-gray-400 leading-3 pb-1 text-gray-400"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
};
