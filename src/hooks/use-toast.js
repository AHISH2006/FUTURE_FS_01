import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description, variant = "default" }) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = {
      id,
      title,
      description,
      variant,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter(t => t.id !== id));
    }, 5000);
  };

  const dismiss = (toastId) => {
    setToasts((prevToasts) => prevToasts.filter(t => t.id !== toastId));
  };

  return {
    toast,
    dismiss,
    toasts,
  };
}