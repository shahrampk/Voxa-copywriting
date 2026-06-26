import { useState } from "react";
import { Heart } from "lucide-react";

export default function HeartToggle() {
  const [liked, setLiked] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setLiked((prev) => !prev);
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={liked ? "Unlike" : "Like"}
      className={`
        relative flex items-center justify-center w-12 h-12 cursor-pointer rounded-full
        transition-transform duration-200 ease-out focus:outline-none
        focus-visible:ring-4 focus-visible:ring-rose-300 
        ${animating ? "scale-125" : "scale-100"}
      `}
    >
      {liked && (
        <span className="absolute inset-0 rounded-full bg-rose-400 opacity-0 animate-ping" />
      )}
      <Heart
        size={30}
        className={`transition-colors duration-200 ${
          liked ? "text-rose-500 fill-rose-500" : "text-gray-400"
        }`}
      />
    </button>
  );
}
