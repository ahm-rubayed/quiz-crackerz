import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQNA from '../QuizQNA/QuizQNA';

const Quizes = () => {
    const quizes = useLoaderData();

    return (
        <div className='container mx-auto mt-5'>
           <h1 className='text-center'>Quiz of {quizes.data.name}</h1>
           <h5 className='text-center mb-5'>Total Questions : {quizes.data.total}</h5>
        {
            quizes.data.questions.map(quiz => <QuizQNA ques={quiz}></QuizQNA>)
        }
       </div>
    );
};

export default Quizes;