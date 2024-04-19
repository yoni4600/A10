import { HOST, PORT } from "../config/config";

export const fetchQuizzes = async () => {
    try {
      const response = await fetch(`http://${HOST}:${PORT}/quizzes`);
      const data = await response.json();
  
      const mappedData = data.map((quiz) => ({
        id: quiz._id,
        name: quiz.name,
        difficulty: quiz.difficulty,
        questions: quiz.questions,
        answers: quiz.answers,
        description: quiz.description
      }));
      return mappedData;
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      return [];
    }
  };
  
  export const fetchQuizzesDetail = async (quizId) => {
    try {
      const response = await fetch(`http://${HOST}:${PORT}/quizzes/${quizId}`);
      const data = await response.json();
  
      if (!data) {
        console.error('quiz not found');
        return null;
      }
  
      const mappedData = {
        id: data._id,
        name: data.name,
        difficulty: data.difficulty,
        questions: data.questions,
        answers: data.answers,
        description: data.description
      };
      return mappedData;
    } catch (error) {
      console.error('Error fetching quiz detail:', error);
      return null;
    }
  };
  
