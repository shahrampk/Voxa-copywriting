import { Check, Copy } from "lucide-react";
import useCopyToClipboard from "../../Hooks/useCopyToClipboard";

export default function CopyBtn({ line }) {
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <button
      className="flex gap-1 items-center cursor-pointer"
      onClick={() => copyToClipboard(line)}
    >
      {copied ? (
        <Check size={16} className="text-green-500" />
      ) : (
        <Copy size={16} />
      )}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
