import { useParams, useLocation } from 'react-router-dom';
import { QuizDetailProvider } from '../../contexts/quizzesContext';
import QuizDetail from './quizDetail';

/**
 * QuizDetailWrapper component is responsible for wrapping the QuizDetail component with QuizDetailProvider.
 * It retrieves the quiz ID from the URL params and passes it to the QuizDetailProvider.
 * If a quiz is passed as a state from the previous route, it directly renders the QuizDetail component with that quiz.
 */
const QuizDetailWrapper = () => {
  // Get the quiz ID from the URL params
  const { id } = useParams();

  // Get the quiz passed as state from the previous route
  const location = useLocation();
  const passedQuiz = location.state?.quiz;

  // Render QuizDetail component with passed quiz if available, otherwise fetch quiz data using the ID
  if (passedQuiz) {
    return <QuizDetail quiz={passedQuiz} />;
  } else {
    return (
      <QuizDetailProvider quizId={id}>
        {/* Pass exercise prop as null since it's not available */}
        <QuizDetail quiz={null} />
      </QuizDetailProvider>
    );
  }
};

export default QuizDetailWrapper;
