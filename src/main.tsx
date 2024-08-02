import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // Evita que las consultas se vuelvan a cargar automáticamente al enfocar la ventana del navegador
      retry: 1, // Número de intentos de reintentos en caso de error en las consultas
      staleTime: 300000, // Tiempo en milisegundos antes de que los datos se consideren obsoletos y se refresquen automáticamente
    },
  },
});

const { VITE_GOOGLE_CLIENT_ID } = import.meta.env;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </QueryClientProvider>
);
