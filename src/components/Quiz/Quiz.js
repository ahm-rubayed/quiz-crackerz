import React from "react";

const Quiz = (quiz) => {
  const { name, logo, total } = quiz.quiz;
  console.log(quiz.quiz);

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
          <div className="d-sm-block d-lg-flex justify-content-between">
            <h5>Total Quizes : {total}</h5>
            <button className="border-0 px-3 rounded text-capitalize">Start quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
