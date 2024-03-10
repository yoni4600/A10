import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LessonContext } from "../../contexts/lessonContext"

const Lessons = () => {
    const lessons = useContext(LessonContext);
    const navigate = useNavigate();

    const handleLessonClick = (lesson) => {
        navigate(`/lessons/${lesson.id}`, { state: { lesson } });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="py-12">
                    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white p-6 rounded-xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {lessons.map(lesson => (
                                    <div
                                        key={lesson.id}
                                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200"
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
