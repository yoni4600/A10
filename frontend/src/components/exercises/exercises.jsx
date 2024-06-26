import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ExerciseContext } from '../../contexts/exerciseContext';

/**
 * Exercises component displays a list of exercises. Each exercise is clickable, and when clicked, it navigates to the exercise detail page.
 */
const Exercises = () => {
    // Retrieve exercises from ExerciseContext
    const exercises = useContext(ExerciseContext);
    const navigate = useNavigate();

    // Function to handle exercise click event
    const handleExerciseClick = (exercise) => {
        navigate(`/exercises/${exercise.id}`, { state: { exercise } });
    };

    return (
        <div className="bg-customBackground flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="py-12">
                    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-customDiv p-6 rounded-xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {exercises.map(exercise => (
                                    <div
                                        key={exercise.id}
                                        className="text-white bg-customGrid hover:bg-customGridHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200"
                                        onClick={() => handleExerciseClick(exercise)}
                                    >
                                        {exercise.name}
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

export default Exercises;
