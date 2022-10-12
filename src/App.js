import "./App.css";
import Main from "./components/Main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Topics from "./components/Topics/Topics";
import Statistic from "./components/Statistic/Statistic";
import Blog from "./components/Blog/Blog";
import Quizes from "./components/Quizes/Quizes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
           return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quizes></Quizes>,
        },
        {
          path: "/topics",
          loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
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
