import { useState } from "react";

export default function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), timeout);
  };

  return { copied, copyToClipboard };
}
