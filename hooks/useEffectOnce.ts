import { useEffect, useRef } from "react";
import type { EffectCallback } from "react";

export default function useEffectOnce(calback: EffectCallback) {
  const ref = useRef<boolean>(false);
  useEffect(() => {
    if (ref.current) return;
    calback();
    ref.current = true;
  }, []);
}
