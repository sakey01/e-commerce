import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { store } from "./store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter basename="/e-commerce">
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
