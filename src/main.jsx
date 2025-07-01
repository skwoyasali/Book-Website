import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookList from "./Components/BookList.jsx";
import BookDetails from "./Components/BookDetails.jsx";
import Home from "./Components/Home.jsx";
import NotFound from "./Components/NotFound.jsx";
import AddBook from "./Components/AddBook.jsx";
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
        element: <BookList />,
      },
      {
        path: "browsebook",
        element: <BookList />,
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
