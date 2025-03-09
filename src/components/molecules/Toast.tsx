import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  duration?: number; // 메시지가 표시될 시간 (밀리초)
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50">
      {message}
    </div>
  );
};

export default Toast;
