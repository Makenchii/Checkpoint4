import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Importe tes pages et composants
import App from "./App";
import About from "./pages/About";
import AlbumDetails from "./pages/AlbumDetails";
import Home from "./pages/Home";

// Création du router avec toutes les routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App contient Header/Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/albums", element: <AlbumDetails /> },
    ],
  },
]);

// Rendu dans le DOM
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
