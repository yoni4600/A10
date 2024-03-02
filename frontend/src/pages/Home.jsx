import React from 'react';

const Home = () => {
  return (
    <main class="flex-1">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white p-6 rounded-xl shadow-xl">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">

                        <button class="p-4 border border-gray-200 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                            Quizzes
                        </button>

                        <button class="p-4 border border-gray-200 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                            Lessons
                        </button>

                        <button class="p-4 border border-gray-200 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                            Exercises
                        </button>

                        <button  class="p-4 border border-gray-200 rounded-lg bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                            Connect with Native Speakers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Home;