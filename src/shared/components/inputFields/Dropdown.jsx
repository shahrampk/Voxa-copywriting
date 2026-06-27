

export default function DropDown({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full max-w-sm relative">
      {label && (
        <label className="text-sm font-medium text-[#64748B]">{label}</label>
      )}

      <div className="relative w-full">
        <select
          {...props}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full px-4 py-2.5 rounded-lg text-left font-normal outline-none transition-all duration-200 cursor-pointer appearance-none
            bg-[#1A2740] 
            ${value ? "text-white" : "text-[#64748B]"}
            border-[0.5px] border-[#2D3F5A] focus:border-[#3B82F6] focus:shadow-[0_0_10px_rgba(59,130,246,0.3)]
          `}
        >
          <option value="" disabled className="bg-[#1A2740] text-[#64748B]">
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#1A2740] text-white"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom Chevron Arrow */}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#64748B]">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
