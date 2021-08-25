import { useEffect } from "react";

/**
 * Performs the callback whenever the element is clicked outside of
 * @param ref The useRef reference to the object
 * @param callback A callback function
 */
export function useOutsideAlerter(
  ref: React.MutableRefObject<any>,
  callback: () => any
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current?.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
