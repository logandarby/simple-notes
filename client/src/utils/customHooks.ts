import { useEffect } from "react";

/**
 * Performs the callback whenever the component is clicked outside of
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

/**
 * Performs the callback whenever the escape key is pressed
 * @param callback A callback function
 */
export function useEscapeKey(callback: () => any) {
  useEffect(() => {
    const _handleEscKey = (event: any) => {
      if (event.keyCode === 27) {
        callback();
      }
    };
    document.addEventListener("keydown", _handleEscKey, false);
    return () => {
      document.removeEventListener("keydown", _handleEscKey, false);
    };
  }, [callback]);
}
