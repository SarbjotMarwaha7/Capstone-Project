// App.js

import React from "react";
import "./App.scss";
import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import BookDetails from "./pages/BookDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero /> <Cards />
      </>
    ),
  },
  {
    path: "/details/:id",
    element: <BookDetails></BookDetails>,
  },
  {},
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
