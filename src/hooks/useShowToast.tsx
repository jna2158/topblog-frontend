import React from "react";
import ReactDOM from "react-dom";
import Toast from "../components/molecules/Toast";

const showToast = (message: string, duration?: number) => {
  const toastRoot = document.createElement("div");
  document.body.appendChild(toastRoot);

  const removeToast = () => {
    ReactDOM.unmountComponentAtNode(toastRoot);
    document.body.removeChild(toastRoot);
  };

  ReactDOM.render(
    <Toast message={message} duration={duration} />,
    toastRoot,
    () => {
      setTimeout(removeToast, duration || 3000);
    }
  );
};

export default showToast;
