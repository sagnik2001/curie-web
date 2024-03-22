import { RefObject, useEffect, useState } from "react";

export default function useOnScreen<T extends Element>({
  ref,
  rootMargin = "0px",
  threshold = 1,
  dontUpdateAfterIntersection = false,
}: {
  ref: RefObject<T>;
  rootMargin?: string;
  threshold?: number;
  dontUpdateAfterIntersection?: boolean;
}): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const divRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting((isIntersecting) => {
          if (isIntersecting && dontUpdateAfterIntersection) return true;
          return entry.isIntersecting;
        });
      },
      {
        rootMargin,
        threshold,
      }
    );
    if (divRef) {
      observer.observe(divRef);
    }
    return () => {
      try {
        observer.unobserve(divRef as Element);
      } catch (err) {}
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
