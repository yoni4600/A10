import React, { useContext, useState } from 'react';
import { ExerciseDetailContext } from '../../contexts/exerciseContext';

/**
 * ExerciseDetail component displays details of an exercise including questions and allows users to answer and check their answers.
 */
const ExerciseDetail = ({ exercise }) => {
  const exerciseDetailContext = useContext(ExerciseDetailContext);
  const exerciseDetail = exercise || exerciseDetailContext;
  let initialUserAnswers = [];
  if (exerciseDetail && exerciseDetail.questions) {
    initialUserAnswers = Array(exerciseDetail.questions.length).fill('');
  } 
  const [userAnswers, setUserAnswers] = useState(initialUserAnswers);
  const [showResults, setShowResults] = useState(false);

  // If exercise detail is not available, display loading
  if (!exerciseDetail.id) {
    return <div>Loading...</div>;
  }

  // Mapped data for easier access
  const mappedData = {
    id: exerciseDetail.id,
    name: exerciseDetail.name,
    description: exerciseDetail.description,
    questions: exerciseDetail.questions,
  };

  // Handler to update user answers
  const handleChange = (index, event) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  // Function to check user answers against correct answers
  const checkAnswers = () => {
    const correctAnswers = mappedData.questions.map(question => question.answer);
    const result = userAnswers.map((answer, index) => answer.toLowerCase() === correctAnswers[index].toLowerCase());
    setShowResults(result);
  };

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-customBackground">
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <div className="py-12">
              <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-customDiv p-6 rounded-xl shadow-xl">
                  <h2 className="text-xl font-semibold mb-4">{mappedData.name}</h2>
                  <p className="text-gray-700 mb-4">{mappedData.description}</p>
                  <h3 className="text-lg font-semibold mb-2">Exercise Questions</h3>

                  {/* Render Exercise Questions */}
                  {mappedData.questions.map((question, index) => (
                    <div key={index} className="mb-4">
                      <p className="mb-2">{index + 1}. {question.question}</p>
                      <input 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Type the correct answer" 
                        value={userAnswers[index]} 
                        onChange={(event) => handleChange(index, event)} 
                      />
                      {showResults && (
                        <p className={userAnswers[index].toLowerCase() === question.answer.toLowerCase() ? 'text-green-500' : 'text-red-500'}>
                          Your answer: {userAnswers[index]}. Correct answer: {question.answer}
                        </p>
                      )}
                    </div>
                  ))}
                  <button 
                    type="button" 
                    className="mt-4 text-white bg-customSubmmit hover:bg-customSubmmitHover focus:ring-4 focus:ring-customSubmmitHover font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                    onClick={checkAnswers}
                  >
                    Check Answers
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default ExerciseDetail;
