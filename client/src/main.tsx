import { createRoot } from "react-dom/client";
import App from "./App";

if (typeof window !== 'undefined') {
  import("./index.css");
}

createRoot(document.getElementById("root")!).render(<App />);
