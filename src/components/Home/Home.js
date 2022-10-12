import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quiz from "../Quiz/Quiz";


const Home = () => {
  const quizes = useLoaderData();

  return (
    <div className="container mx-auto">
        <Header></Header>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-5">
        {
          quizes.data.map(quiz => <Quiz
          key={quiz.id} quiz={quiz}
          ></Quiz>)
        }
        </div>
    </div>
  );
};

export default Home;
