import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowseBook from "./Pages/BrowseBook.jsx";
import BookDetails from "./Pages/BookDetails.jsx";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import AddBook from "./Pages/AddBook.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "books/:category",
        element: <BrowseBook />,
      },
      {
        path: "browsebook",
        element: <BrowseBook />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
    
      {
        path: "addbook",
        element: <AddBook />,
      },
    ],
    
  },
    {
        path: "*",
        element: <NotFound />,
   },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
