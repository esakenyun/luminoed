import { useEffect, useRef, useState } from "react";

export function useScrollFocus<T extends HTMLElement>(
  length: number,
  threshold = 0.5
) {
  const refs = useRef<(T | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (!refs.current?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const indexAttr = entry.target.getAttribute("data-index");
          if (!indexAttr) return;

          const index = Number(indexAttr);
          if (Number.isNaN(index)) return;

          setActiveIndex(index);
        });
      },
      { threshold }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [refs, threshold]);

  return {
    refs,
    activeIndex,
  };
}
