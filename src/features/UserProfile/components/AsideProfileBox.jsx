import React from "react";

export const UserProfileBox = ({
  name = "Muhammad Shahram",
  plan = "Pro Plan",
  avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80", // Apni picture ka path yahan lagayein
}) => {
  return (
    <div className="flex items-center gap-3 w-full max-w-65 p-3 bg-surface rounded-2xl border border-zinc-800/30 transition-colors duration-200 hover:bg-[#2a2a2d] cursor-pointer select-none">
      {/* User Avatar */}
      <img
        src={avatarUrl}
        alt={name}
        className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-700/80"
      />

      {/* User Info */}
      <div className="flex flex-col min-w-0">
        <span title={name} className="text-[15px] font-semibold text-zinc-100 tracking-wide truncate leading-tight">
          {name}
        </span>
        <span title={plan} className="text-[12px] text-zinc-400 font-medium tracking-normal mt-0.5 truncate">
          {plan}
        </span>
      </div>
    </div>
  );
};

export default UserProfileBox;