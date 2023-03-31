import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { fallbackModelID, OpenAIModelID } from "./types/openai";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App serverSideApiKeyIsSet={false} defaultModelId={OpenAIModelID.GPT_3_5} />
  </React.StrictMode>
);
