import  { useState, useRef } from "react";
import {
  CheckCircle2Icon,
  FileTextIcon,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";

export default function FileUpload({ onFileSelect }) {
  const [file, setFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Helper to format file sizes
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Simulate file upload progress
  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(e.target.files[0]);
      simulateUpload();
      onFileSelect(selectedFile);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      simulateUpload();
    }
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setUploadProgress(0);
    setIsUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Main Card Container */}
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={!file ? onButtonClick : undefined}
        className={`relative flex flex-col items-center justify-center w-full p-8 rounded-xl border-2 border-border border-dashed transition-all duration-200 
          ${file ? "border-gray-200 bg-gray-50/50 cursor-default" : "cursor-pointer"}
          ${isDragActive ? "border-accent bg-accent/50 scale-[1.01]" : "border-gray-300 bg-white hover:border-accent hover:bg-gray-50"}`}
      >
        {!file ? (
          /* Empty State: Prompt to Upload */
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-3 bg-accent rounded-full text-accent-600">
              <UploadCloudIcon className="h-7 w-7 animate-pulse" />
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-accent-600 hover:underline">
                Drop file here
              </span>{" "}
              or click to browse
            </div>
            <p className="text-xs text-gray-400">
              Supports any file up to 50MB
            </p>
          </div>
        ) : (
          /* Active State: File Details & Progress */
          <div className="w-full space-y-4">
            <div className="flex items-start justify-between space-x-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="p-2 bg-gray-100 text-gray-600 rounded-lg shrink-0">
                  <FileTextIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>

              {/* Action Button (Remove) */}
              <button
                onClick={removeFile}
                className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                title="Remove file"
              >
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Progress Bar Container */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-gray-500">
                  {uploadProgress < 100 ? "Uploading..." : "Upload complete"}
                </span>
                <span
                  className={`font-semibold ${uploadProgress < 100 ? "text-accent" : "text-green-600"} flex items-center gap-1`}
                >
                  {uploadProgress}%
                  {uploadProgress === 100 && (
                    <CheckCircle2Icon className="h-3.5 w-3.5" />
                  )}
                </span>
              </div>

              {/* Outer Progress Track */}
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full transition-all duration-200 ease-out rounded-full ${
                    uploadProgress < 100 ? "bg-accent" : "bg-success"
                  }`}
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
