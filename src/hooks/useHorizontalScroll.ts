import { useEffect, useRef } from "react";

const useSnapHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children;

    const scrollToSection = (direction: "next" | "prev") => {
      if (!el) return;

      const scrollLeft = el.scrollLeft;
      const sectionWidth = el.clientWidth;
      const currentIndex = Math.round(scrollLeft / sectionWidth);

      let targetIndex =
        direction === "next" ? currentIndex + 1 : currentIndex - 1;

      targetIndex = Math.max(0, Math.min(children.length - 1, targetIndex));

      const targetScroll = sectionWidth * targetIndex;

      el.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    };

    const onWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      if (Math.abs(e.deltaY) < 10) return; // prevent micro scrolls

      e.preventDefault();
      isScrolling.current = true;

      // Determine direction: normalize to +1 (down) or -1 (up)
      const direction = Math.sign(e.deltaY);

      if (direction  > 0) {
        scrollToSection("next");
      } else {
        scrollToSection("prev");
      }

      // Cooldown to avoid fast scroll
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return ref;
};

export default useSnapHorizontalScroll;
