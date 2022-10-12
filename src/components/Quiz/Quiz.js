import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const Quiz = (quiz) => {
  const { name, logo, total, id } = quiz.quiz;

  return (
    <div class="col">
      <div class="card">
        <img src={logo} class="card-img-top bg-dark rounded-0" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <div className="d-sm-block d-lg-flex justify-content-between align-items-center">
            <h5>Total Quizes : {total}</h5>
            <Link to={`/quiz/${id}`}>
              <button className="border-0 px-3 py-2 rounded text-capitalize quiz-btn text-white">start quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
