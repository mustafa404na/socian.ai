import gsap from "gsap";
import { useMemo } from "react";

export default function useGsapContext(scope) {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
  return ctx;
}
