import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "./context/CounterContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <CounterProvider>
          <App />
        </CounterProvider>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>
);
