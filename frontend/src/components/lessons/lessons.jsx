import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LessonContext } from "../../contexts/lessonContext"

/**
 * Lessons component is responsible for rendering the list of lessons.
 * It retrieves the lessons from the LessonContext and provides navigation to individual lesson details.
 */
const Lessons = () => {
    // Retrieve lessons from the LessonContext
    const lessons = useContext(LessonContext);
    // Initialize the useNavigate hook for navigation
    const navigate = useNavigate();

    // Function to handle clicking on a lesson item
    const handleLessonClick = (lesson) => {
        // Navigate to the individual lesson detail page with the lesson data passed as state
        navigate(`/lessons/${lesson.id}`, { state: { lesson } });
    };

    return (
        <div className="bg-customBackground flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="py-12">
                    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-customDiv p-6 rounded-xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {lessons.map(lesson => (
                                    <div
                                        key={lesson.id}
                                        className="text-white bg-customGrid hover:bg-customGridHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200"
                                        onClick={() => handleLessonClick(lesson)}
                                    >
                                        {lesson.name}
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

export default Lessons;
