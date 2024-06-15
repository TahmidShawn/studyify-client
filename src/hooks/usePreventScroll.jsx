import { useEffect, useRef } from "react";

const usePreventScroll = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return inputRef;
};

export default usePreventScroll;
