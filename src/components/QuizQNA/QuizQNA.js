import React from "react";
import './QuizQNA.css'

const QuizQNA = (ques) => {

  const {question, options, correctAnswer} = ques.ques;

  const handleRadioBtn = (ans) => {
    if(ans === correctAnswer) {
      console.log("correct")
    }
    else{
      console.log("wrong")
    }
  }


  return (
    <div className="border mt-3 mb-5 p-3 rounded">
        <h5 className="mb-4">Question: {question}</h5>
       <div className="mx-5">
       {
            options.map(ques => <label className="d-flex border px-4 py-3 my-4 rounded shadow-sm text-capitalize">
                <input onClick={() => handleRadioBtn(ques)} type="radio" name="quiz" className="me-2" />{ques}
                </label>)
        }
       </div>


    </div>
  );
};

export default QuizQNA;
