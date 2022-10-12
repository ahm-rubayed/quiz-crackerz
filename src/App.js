import "./App.css";
import Main from "./components/Main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Topics from "./components/Topics/Topics";
import Statistic from "./components/Statistic/Statistic";
import Blog from "./components/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
        },
        {
          path: "/statistic",
          element: <Statistic></Statistic>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
