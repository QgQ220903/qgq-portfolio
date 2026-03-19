import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "qgq.dev";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 800);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      <div className="mb-6 text-2xl font-semibold text-gray-900 tracking-tight font-mono">
        {text}<span className="animate-blink text-blue-600">|</span>
      </div>
      <div className="w-[160px] h-[2px] bg-gray-100 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-600 animate-loading-bar"></div>
      </div>
    </div>
  );
};