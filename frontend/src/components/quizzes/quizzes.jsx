import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizzesContext } from "../../contexts/quizzesContext";

const Quizzes = () => {
    const quizzes = useContext(QuizzesContext);
    console.log("quizzes" , quizzes)
    const navigate = useNavigate();
    const handleQuizClick = (quiz) => {
        navigate(`/quizzes/${quiz.id}`, { state: { quiz } });
    };
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="py-12">
                    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white p-6 rounded-xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {quizzes.map(quiz => (
                                    <div
                                        key={quiz.id}
                                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200"
                                        onClick={() => handleQuizClick(quiz)}
                                    >
                                        {quiz.difficulty}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Quizzes;