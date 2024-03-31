import { useParams, useLocation } from 'react-router-dom';
import { QuizDetailProvider } from '../../contexts/quizzesContext';
import QuizDetail from './quizDetail';

const QuizDetailWrapper = () => {
  const { id } = useParams();
  const location = useLocation();
  const passedQuiz = location.state?.quiz;
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
