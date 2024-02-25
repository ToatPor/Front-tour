import { useEffect, useRef } from "react";

export const useNextInput = function () {
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const handleMouseOut = function (e: KeyboardEvent) {
      const target = e.target as HTMLInputElement;
      if (isNaN(Number(target.value))) {
        target.value = "";
        return;
      }
      if (
        ref.current &&
        ref.current?.contains(e.target as HTMLInputElement) &&
        e.key !== "Backspace" &&
        e.key !== "Tab" &&
        e.code.startsWith("Digit")
      ) {
        const NexTarget = target.nextElementSibling as HTMLInputElement;
        target.tabIndex === 6 ? target.blur() : NexTarget.focus();

        return;
      }
    };
    ref.current?.addEventListener("keyup", handleMouseOut);
    return () => ref.current?.removeEventListener("keyup", handleMouseOut);
  });

  return ref;
};
