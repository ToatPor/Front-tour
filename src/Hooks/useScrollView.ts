import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useScrollView = () => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(
    function () {
      const handleLoad = function (e: MouseEvent) {
        if (
          pathname &&
          ref.current &&
          ref?.current?.contains?.(e.target as HTMLAnchorElement)
        ) {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
        return;
      };
      ref.current?.addEventListener("click", handleLoad, true);
      return () => ref.current?.removeEventListener("click", handleLoad, true);
    },
    [pathname]
  );
  return ref;
};
// window.add try to change

// export const useScrollView = () => {
//   const { pathname } = useLocation();

//   useEffect(
//     function () {
//       if (!pathname) return;
//       window.scroll({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     },
//     [pathname]
//   );
//   return;
// };
