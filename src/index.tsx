import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./service/axiosInterceptor"; // 인터셉터 설정 불러오기

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
