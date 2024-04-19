import { HOST, PORT } from "../config/config";

/**
 * Fetches all exercises from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of exercise objects.
 */
export const fetchExercises = async () => {
    try {
      const response = await fetch(`http://${HOST}:${PORT}/exercises`);
      const data = await response.json();
  
      const mappedData = data.map(exercise => ({
        id: exercise._id,
        name: exercise.name,
        description: exercise.description,
        questions: exercise.questions.map(question => ({
          question: question.question,
          options: question.options,
          answer: question.answer
        }))
      }));
      return mappedData;
    } catch (error) {
      console.error('Error fetching exercises:', error);
      return [];
    }
  };

/**
 * Fetches details of a specific exercise from the server.
 * @param {string} exerciseId - The ID of the exercise to fetch details for.
 * @returns {Promise<Object|null>} A promise that resolves to the exercise object if found, otherwise null.
 */
export const fetchExerciseDetail = async (exerciseId) => {
  try {
    const response = await fetch(`http://${HOST}:${PORT}/exercises/${exerciseId}`);
    const data = await response.json();

    if (!data) {
      console.error('Exercise not found');
      return null;
    }
    const mappedData = {
      id: data._id,
      name: data.name,
      description: data.description,
      questions: data.questions.map(question => ({
        question: question.question,
        options: question.options,
        answer: question.answer
      }))
    };
    return mappedData;
  } catch (error) {
    console.error('Error fetching exercise detail:', error);
    return null;
  }
};
  
  
