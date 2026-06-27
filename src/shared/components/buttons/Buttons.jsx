export const PrimaryBtn = ({ value, icon, onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className={`cursor-pointer bg-primary-gradient text-white py-2 px-4 rounded-lg hover:opacity-90 active:scale-95 text-nowrap font-semibold flex items-center ${icon ? "flex items-center gap-2" : ""}`}
    >
      {value}
      {icon ? icon : ""}
    </button>
  );
};
export const SecondaryBtn = ({ value, icon, onClickFn, styles }) => {
  return (
    <button
      onClick={onClickFn}
      className={`text-nowrap cursor-pointer bg-surface text-secondary transition-all duration-150 py-2 px-4 rounded-lg border-border border hover:bg-accent-deep active:scale-95 font-semibold ${icon ? "flex items-center gap-2" : ""} ${styles}`}
    >
      {value}
      {icon ? icon : ""}
    </button>
  );
};
export const GhostBtn = ({ value, icon, onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className={`text-nowrap cursor-pointer bg-transparent text-accent-deep transition-all duration-150 py-2 px-4 rounded-lg hover:bg-accent/20 font-semibold ${icon ? "flex items-center gap-2" : ""}`}
    >
      {value}
      {icon ? icon : ""}
    </button>
  );
};
export const DangerBtn = ({ value, icon, onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className={`text-nowrap cursor-pointer text-error hover:bg-error/20 py-2 px-4 rounded-lg transition-all duration-150 font-semibold ${icon ? "flex items-center gap-2" : ""}`}
    >
      {value}
      {icon ? icon : ""}
    </button>
  );
};

// Red text #DC2626 only — NO red background button. Used only for destructive actions
// like Delete. Small size, lowest visual weight on any screen.
