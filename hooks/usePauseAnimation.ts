import { RefObject, useEffect } from "react";

export default function usePauseAnimation(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    window.addEventListener("focus", () => {
      if (ref.current) ref.current.style.animationPlayState = "paused";
    });

    window.addEventListener("blur", () => {
      if (ref.current) ref.current.style.animationPlayState = "running";
    });
  }, []);
}
