import { Zap } from "lucide-react";
const Logo = () => {
  return (
    <div className="flex gap-2 items-center pl-2 pt-2">
      <div className="h-9 w-9  bg-pro-light rounded-lg flex items-center justify-center">
        <Zap fill="#7c3aed" stroke="none" size={28} />
      </div>
      <p className="text-xl font-semibold text-pro-light">
        <span className="font-serif text-3xl">V</span>oxa
      </p>
    </div>
  );
};

export default Logo;
