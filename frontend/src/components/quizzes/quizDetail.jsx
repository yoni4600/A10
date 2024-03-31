import React, { useContext, useState } from 'react';
import { QuizDetailContext } from '../../contexts/quizzesContext';

const QuizDetail = ({ quiz }) => {
  const quizzesDetail = useContext(QuizDetailContext) || quiz;
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState(Array(quizzesDetail.questions.length).fill(''));
  const [results, setResults] = useState(Array(quizzesDetail.questions.length).fill(null));

  if (!quizzesDetail) {
    return <div>Loading...</div>;
  }

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
    // Clear result for this question when user changes answer
    const newResults = [...results];
    newResults[index] = null;
    setResults(newResults);
  };

  const handleSubmit = () => {
    const newResults = answers.map((answer, index) => {
      return answer.toLowerCase() === quizzesDetail.answers[index].toLowerCase();
    });
    setResults(newResults);
    setSubmitted(true);
  };

  const calculateScore = () => {
    const correctAnswers = results.filter(result => result).length;
    const totalQuestions = quizzesDetail.questions.length;
    const score = (correctAnswers / totalQuestions) * 100;
    return score;
  };

  const getScoreColor = (score) => {
    if (score === 100) {
      return "text-green-500";
    } else if (score >= 80) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen">
      <main className="flex-1">
        <div className="py-12">
          <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <h2 className="text-xl font-semibold mb-4">{quizzesDetail.name}</h2>
              <h3 className="text-lg font-semibold mb-2">Quiz Questions</h3>

              {/* Render Exercise Questions */}
              {quizzesDetail.questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <p className="mb-2">{index + 1}. {question}</p>
                  <input 
                    type="text" 
                    value={answers[index]}
                    onChange={(e) => handleAnswerChange(index, e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Type your answer" 
                    disabled={submitted} // Disable input after submission
                  />
                  {submitted && (
                    <p className={results[index] ? "text-green-500" : "text-red-500"}>
                      {results[index] ? "Correct! nice :)" : `Wrong: Correct answer is "${quizzesDetail.answers[index]}"`}
                    </p>
                  )}
                </div>
              ))}
              
              {/* Submit Button */}
              {!submitted && (
                <button 
                  onClick={handleSubmit} 
                  className="bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200"
                >
                  Submit
                </button>
              )}

              {/* Score Display */}
              {submitted && (
                <div className="mt-4">
                  <p className={`text-lg font-semibold ${getScoreColor(calculateScore())}`}>
                    Your Score: {calculateScore()}%
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizDetail;