import { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

// Individual Toast Item Component
const ToastItem = ({ id, type, message, onClose }) => {
  useEffect(() => {
    // Auto-dismiss after 4 seconds
    const timer = setTimeout(() => {
      onClose(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  // Dynamic Styles based on Notification Type
  const typeStyles = {
    success: {
      border: "border-l-4 border-l-green-500",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />,
      bg: "bg-green-50/50",
    },
    error: {
      border: "border-l-4 border-l-red-500",
      icon: <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />,
      bg: "bg-red-50/50",
    },
    info: {
      border: "border-l-4 border-l-blue-500",
      icon: <Info className="h-5 w-5 text-blue-500 shrink-0" />,
      bg: "bg-blue-50/50",
    },
  };

  const currentStyle = typeStyles[type] || typeStyles.info;

  return (
    <div
      className={`flex items-start justify-between w-full max-w-[320px] p-4 bg-white rounded-r-lg shadow-lg border border-gray-100 transition-all duration-300 transform translate-y-0 animate-in fade-in slide-in-from-bottom-4 ${currentStyle.border}`}
    >
      <div className="flex gap-3 min-w-0">
        {/* Type Icon */}
        <div className={`p-0.5 rounded-md ${currentStyle.bg}`}>
          {currentStyle.icon}
        </div>
        {/* Message */}
        <p className="text-sm font-medium text-gray-700 wrap-break-word pt-0.5">
          {message}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={() => onClose(id)}
        className="ml-4 p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors shrink-0"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

// Main Container Component (Exported)
export default function ToastNotification({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 w-full max-w-[320px] pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastItem
            id={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={removeToast}
          />
        </div>
      ))}
    </div>
  );
}
