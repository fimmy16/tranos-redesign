"use client";

import { useSecurityEngine } from "@/hooks/useSecurityEngine";

export default function SecurityProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  useSecurityEngine();
  return <>{children}</>;
}
