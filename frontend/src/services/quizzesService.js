import { HOST, PORT } from "../config/config";

export const fetchQuizzes = async () => {
    try {
      console.log("1")
      const response = await fetch(`https://${HOST}:${PORT}/quizzes`);
      console.log("2")
      const data = await response.json();
      console.log("3")
  
      const mappedData = data.map((quiz) => ({
        id: quiz._id,
        difficulty: quiz.difficulty,
        questions: quiz.questions,
      }));
      console.log("4")
      console.log("mappedData",mappedData)
      return mappedData;
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      return [];
    }
  };
  
  export const fetchQuizzesDetail = async (quizId) => {
    try {
      const response = await fetch(`https://${HOST}:${PORT}/quizzes/${quizId}`);
      const data = await response.json();
  
      if (!data) {
        console.error('quiz not found');
        return null;
      }
  
      const mappedData = {
        id: data._id,
        difficulty: data.difficulty,
        questions: data.questions,
      };
      return mappedData;
    } catch (error) {
      console.error('Error fetching quiz detail:', error);
      return null;
    }
  };
  
