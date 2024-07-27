import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // Evita que las consultas se vuelvan a cargar automáticamente al enfocar la ventana del navegador
      retry: 1, // Número de intentos de reintentos en caso de error en las consultas
      staleTime: 300000, // Tiempo en milisegundos antes de que los datos se consideren obsoletos y se refresquen automáticamente
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
