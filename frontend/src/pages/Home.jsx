import React, { useState } from 'react';
import { LessonsProvider } from '../contexts/lessonContext'
import { useNavigate} from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleLessonsClick = () => {
    navigate('/lessons');
  };
  const handleExecisesClick = () => {
    navigate('/exercises');
  };
  const handleQuizzesClick = () => {
    navigate('/quiezzes');
  };
  const handleConnectSpeakersClick = () => {
    navigate('/ConnectSpeakers');
  };
  return (
    <main className="flex-1">
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white p-6 rounded-xl shadow-xl">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">

                        <button onClick={handleQuizzesClick} className="p-4 border border-gray-200 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                            Quizzes
                        </button>

                        <button onClick={handleLessonsClick} className="p-4 border border-gray-200 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                            Lessons
                        </button>
                        
                        <button onClick={handleExecisesClick} className="p-4 border border-gray-200 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                            Exercises
                        </button>

                        <button onClick={handleConnectSpeakersClick} className="p-4 border border-gray-200 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                            Connect with Native Speakers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};