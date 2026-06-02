"use client";

import dynamic from "next/dynamic";

export const FloatingChatWidget = dynamic(
  () => import("@/components/chat/FloatingChatWidget").then((m) => m.FloatingChatWidget),
  { ssr: false },
);
