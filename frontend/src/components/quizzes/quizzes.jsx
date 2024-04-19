import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizzesContext } from "../../contexts/quizzesContext";

/**
 * Quizzes component renders a list of quizzes and handles navigation to individual quiz detail pages.
 * It uses the QuizzesContext to retrieve the list of quizzes.
 */
const Quizzes = () => {
    // Retrieve the list of quizzes from the QuizzesContext
    const quizzes = useContext(QuizzesContext);
    const navigate = useNavigate();

    // Function to handle navigation to individual quiz detail pages
    const handleQuizClick = (quiz) => {
        navigate(`/quizzes/${quiz.id}`, { state: { quiz } });
    };
    return (
        <div className="bg-customBackground flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="py-12">
                    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-customDiv p-6 rounded-xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {quizzes.map(quiz => (
                                    <div
                                        key={quiz.id}
                                        className="text-white bg-customGrid hover:bg-customGridHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200"
                                        onClick={() => handleQuizClick(quiz)}
                                    >
                                        <div>{quiz.name}</div>
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