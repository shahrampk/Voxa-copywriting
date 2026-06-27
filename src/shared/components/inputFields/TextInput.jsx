
export default function CustomInput({
  label,
  error,
  helperText,
  value,
  setValue,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full max-w-sm">
      {/* Optional Label */}
      {label && (
        <label className="text-sm font-medium text-[#64748B]">{label}</label>
      )}

      {/* Input Field */}
      <input
        value={value}
        onChange={(e) => setValue((prev) => (prev = e.target.value))}
        {...props}
        className={`
          w-full px-4 py-2.5 rounded-lg text-white font-normal outline-none transition-all duration-200
          
          /* Base Styles */
          bg-[#1A2740] 
          placeholder-[#64748B]
          
          /* Border Logic (Uses your custom error state) */
          ${
            error
              ? "border border-red-500 focus:border-red-500 focus:shadow-[0_0_8px_rgba(239,68,68,0.4)]"
              : "border-[0.5px] border-[#2D3F5A] focus:border-[#3B82F6] focus:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
          }
        `}
      />

      {/* Error / Helper Text */}
      {error && helperText && (
        <p className="text-xs text-red-500 mt-0.5">{helperText}</p>
      )}
    </div>
  );
}
