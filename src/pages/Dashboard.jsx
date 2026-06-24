import React, { useState } from "react";
import {
  DangerBtn,
  GhostBtn,
  PrimaryBtn,
  SecondaryBtn,
} from "../shared/components/buttons/Buttons.jsx";
import FileUpload from "../shared/components/inputFields/FileUpload.jsx";
import ToastNotification from "../shared/components/feedbacks/ToastNotification.jsx";

const Dashboard = () => {
  const [showToast, setShowToast] = useState(false);
  const [toasts, setToasts] = useState([
    { id: 1, type: "info", message: "This is an info toast!" },
    { id: 2, type: "success", message: "This is a success toast!" },
    { id: 3, type: "error", message: "This is an error toast!" },
  ]);

  const removeToast = (id) => {
    console.log("Toast removed", id);
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="flex flex-col gap-3">
      <PrimaryBtn value="Primary Button" />
      <SecondaryBtn value="Secondary Button" />
      <GhostBtn value="Ghost Button" />
      <DangerBtn value="Danger Button" />
      <FileUpload
        onFileSelect={(file) => {
          console.log("Selected file:", file);
          const reader = new FileReader();

          reader.onload = (event) => {
            const fileContent = event.target.result;
            console.log("File ka andar ka asli data yeh hai:\n", fileContent);
          };

          reader.readAsText(file);
        }}
      />
      <button onClick={() => setShowToast(true)}>show Toast</button>
      {showToast && (
        <ToastNotification toasts={toasts} removeToast={removeToast} />
      )}
    </div>
  );
};

export default Dashboard;
