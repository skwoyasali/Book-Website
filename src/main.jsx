import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./App.css";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookList from "./Components/BookList.jsx";

const router = createBrowserRouter([
  {
    path: "/Book-Website/",
    element: <App />,
    children: [
      {
        path:"/Book-Website/",
        element:<BookList />,
      },
      {
        path: "/Book-Website/about",
        element: <About />,
      },
      {
        path: "/Book-Website/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
