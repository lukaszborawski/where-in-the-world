import { useEffect } from "react";

const useOutsideClick = (buttonRef, setIsOpen) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [buttonRef, setIsOpen])
};

export default useOutsideClick;