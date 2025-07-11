"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    // Disable scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    //  Handle ESC key
    document.addEventListener("keydown", onKeyDown);

    return () => {
      //Re-enable scroll
      document.body.style.overflow = originalStyle;

      //Cleanup
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-black/50 h-screen z-50 flex justify-center items-center"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="bg-white p-4 rounded shadow-lg w-[90%] max-w-2xl relative"
      >
        {children}
      </div>
    </div>
  );
}
