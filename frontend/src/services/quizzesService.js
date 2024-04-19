import { HOST, PORT } from "../config/config";

/**
 * Fetches all quizzes from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of quiz objects.
 */
export const fetchQuizzes = async () => {
    try {
      const response = await fetch(`https://${HOST}:${PORT}/quizzes`);
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

/**
 * Fetches details of a specific quiz from the server.
 * @param {string} quizId - The ID of the quiz to fetch details for.
 * @returns {Promise<Object|null>} A promise that resolves to the quiz object if found, otherwise null.
 */
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
  
