import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChildReaching } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';
import { jwtDecode } from "jwt-decode";
// import { useCookies } from 'react-cookie';
// import { jwtDecode } from "jwt-decode";

export const Home = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);

  let username = ''; // Initialize username

  // Decode token if available
  if (cookies.token) {
    const decodedToken = jwtDecode(cookies.token);
    username = decodedToken.username;
  }

  const handleLessonsClick = () => {
    navigate('/lessons');
  };
  const handleExercisesClick = () => {
    navigate('/exercises');
  };
  const handleQuizzesClick = () => {
    navigate('/quizzes');
  };
  const handleConnectSpeakersClick = () => {
    navigate('/nativeSpeakers');
  };

  return (
    <main className="bg-customBackground min-h-screen flex flex-col ">
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-customDiv p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Hi {username}! Enjoy your studying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <button onClick={handleQuizzesClick} className="p-4 border border-gray-200 rounded-lg bg-customGrid text-white font-bold text-lg hover:bg-customGridHover focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                Quizzes
              </button>
              <button onClick={handleLessonsClick} className="p-4 border border-gray-200 rounded-lg bg-customGrid text-white font-bold text-lg hover:bg-customGridHover focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                Lessons
              </button>
              <button onClick={handleExercisesClick} className="p-4 border border-gray-200 rounded-lg bg-customGrid text-white font-bold text-lg hover:bg-customGridHover focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                Exercises
              </button>
              <button onClick={handleConnectSpeakersClick} className="p-4 border border-gray-200 rounded-lg bg-customGrid text-white font-bold text-lg hover:bg-customGridHover focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150">
                Connect with Native Speakers
              </button>
              <div className="kid no-border">
                <FontAwesomeIcon icon={faChildReaching} size="10x"/>
              </div>
            </div>
            </div>
        </div>
      </div>
    </main>
  );
};
