export const PrimaryBtn = ({ value }) => {
  return (
    <button className="cursor-pointer bg-primary-gradient text-white py-1 px-4 rounded-lg hover:opacity-90 active:scale-95">
      {value}
    </button>
  );
};
export const SecondaryBtn = ({ value }) => {
  return (
    <button className="cursor-pointer bg-surface text-white/90 transition-all duration-150 py-1 px-4 rounded-lg border-border border hover:border-accent active:scale-95">
      {value}
    </button>
  );
};
export const GhostBtn = ({ value }) => {
  return (
    <button className="cursor-pointer bg-transparent text-accent-deep transition-all duration-150 py-1 px-4 rounded-lg hover:bg-accent/20">
      {value}
    </button>
  );
};
export const DangerBtn = ({ value }) => {
  return (
    <button className="cursor-pointer text-error hover:bg-error/20 py-1 px-4 rounded-lg transition-all duration-150">
      {value}
    </button>
  );
};

// Red text #DC2626 only — NO red background button. Used only for destructive actions
// like Delete. Small size, lowest visual weight on any screen.
