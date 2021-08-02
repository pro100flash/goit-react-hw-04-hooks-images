import { useEffect } from "react";
import S from "./Modal.module.css";

export default function Modal({ onClose, children }) {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={S.Overlay} onClick={handleBackdropClick}>
      <div className={S.Modal}>{children}</div>
    </div>
  );
}
