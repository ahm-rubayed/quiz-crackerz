import React from "react";
import "./QuizQNA.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const QuizQNA = (ques) => {
  const { question, options, correctAnswer } = ques.ques;

  const handleRadioBtn = (ans) => {
    if (ans === correctAnswer) {
      toast("Correct Answer😍");
    } else {
      toast("Wrong Answer. Try again");
    }
  };

  const eyeOpen = () => {
   toast(correctAnswer)
  }

  return (
    <div className="border mt-3 mb-5 p-3 rounded shadow">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mt-3 mb-4">Question: {question}</h5>
        <button onClick={eyeOpen} className="border-0 bg-white fs-5">
          <FontAwesomeIcon icon={faEye} />
          </button>
      </div>
      <div className="mx-5">
        {options.map((ques) => (
          <label className="d-flex border px-4 py-3 my-4 rounded shadow-sm text-capitalize">
            <input
              onClick={() => handleRadioBtn(ques)}
              type="radio"
              name="quiz"
              className="me-2"
            />
            {ques}
          </label>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default QuizQNA;
