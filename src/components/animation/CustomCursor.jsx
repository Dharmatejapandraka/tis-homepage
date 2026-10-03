import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let outlineX = mouseX;
    let outlineY = mouseY;

    let animationFrame;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      if (outlineRef.current) {
        outlineRef.current.style.transform =
          `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const handleHover = (event) => {
      const target = event.target.closest(
        "a, button, [data-cursor]"
      );

      if (outlineRef.current) {
        outlineRef.current.classList.toggle(
          "cursor-hover",
          Boolean(target)
        );
      }

      if (dotRef.current) {
        dotRef.current.classList.toggle(
          "cursor-dot-hover",
          Boolean(target)
        );
      }
    };

    window.addEventListener("mousemove", moveCursor, {
      passive: true,
    });

    document.addEventListener("mouseover", handleHover);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <span
        ref={dotRef}
        className="tis-cursor-dot"
        aria-hidden="true"
      />

      <span
        ref={outlineRef}
        className="tis-cursor-outline"
        aria-hidden="true"
      />
    </>
  );
}