import { PlusCircle } from "lucide-react";

const AddCustomDocs = () => {
  return (
    <div className="cursor-pointer hover:bg-surface/30 transition-colors duration-100 border border-border/50 flex flex-col gap-3 justify-center items-center text-center rounded-lg">
      <PlusCircle className="size-10" />
      <div>
        <p className="text-xl font-semibold">Create New Styles</p>
        <p className="text-sm text-muted">Define custom rules</p>
      </div>
    </div>
  );
};

export default AddCustomDocs;
