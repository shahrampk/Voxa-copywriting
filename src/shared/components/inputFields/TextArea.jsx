import  { useState, useRef, useEffect } from "react";

export default function CustomTextarea({
  label,
  error,
  helperText,
  maxLength = 200,
  placeholder,
  ...props
}) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize logic based on content scroll height
    useEffect(() => {
      const textarea = textareaRef.current;
      console.log("ok");

      if (textarea) {
        textarea.style.height = "auto"; // Reset height
        textarea.style.height = `${Math.max(80, textarea.scrollHeight)}px`; // Apply new height (min 80px)
      }
    }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Show character count when user has typed 80% or more of the limit
  const showCounter = text.length >= maxLength * 0.8;

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-sm relative">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-[#64748B]">{label}</label>
      )}

      {/* Textarea Container */}
      <div className="relative w-full">
        <textarea
          {...props}
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder}
          rows={3}
          className={`
            w-full px-4 py-2.5 rounded-lg text-white outline-none transition-all duration-200 resize-none
            
            /* Base Styles */
            bg-[#1A2740] 
            placeholder-[#64748B]
            min-h-20
            
            /* Give bottom padding room for counter if visible */
            ${showCounter ? "pb-8" : "pb-2.5"}
            
            /* Border & Glow Logic */
            ${
              error
                ? "border border-red-500 focus:border-red-500 focus:shadow-[0_0_8px_rgba(239,68,68,0.4)]"
                : "border-[0.5px] border-[#2D3F5A] focus:border-[#3B82F6] focus:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            }
          `}
        />

        {/* Character Count Badge */}
        {showCounter && (
          <span className="absolute bottom-2.5 right-3 text-xs font-mono text-[#64748B] pointer-events-none select-none animate-fade-in">
            {text.length}/{maxLength}
          </span>
        )}
      </div>

      {/* Error / Helper Text */}
      {error && helperText && (
        <p className="text-xs text-red-500 mt-0.5">{helperText}</p>
      )}
    </div>
  );
}
