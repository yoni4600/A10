import React, { createContext, useEffect, useState } from 'react';
import { fetchQuizzes, fetchQuizzesDetail } from '../services/quizzesService';

const QuizzesContext = createContext();
const QuizDetailContext = createContext();

export const QuizzesProvider = (props) => { 
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    const fetchQuizzesData = async () => {
      const fetchedQuizzes = await fetchQuizzes();
      setQuizzes(fetchedQuizzes);
    };
    fetchQuizzesData();
  }, []);

  return <QuizzesContext.Provider value={quizzes}>{props.children}</QuizzesContext.Provider>;
};

export const QuizDetailProvider = (props) => { // Note the uppercase 'Q' in QuizDetailProvider

  const [quizzesDetail, setQuizzesDetail] = useState({});
  const { quizId } = props;
  
  useEffect(() => {
    const fetchQuizzesDetailData = async () => {
      const fetchedQuizzesDetail = await fetchQuizzesDetail(quizId);
      setQuizzesDetail(fetchedQuizzesDetail);
    };
  
    // Only fetch quiz detail when quizId is available
    if (quizId) {
      fetchQuizzesDetailData();
    }
  }, [quizId]);

  return <QuizDetailContext.Provider value={quizzesDetail}>{props.children}</QuizDetailContext.Provider>;
};

export { QuizzesContext, QuizDetailContext };
