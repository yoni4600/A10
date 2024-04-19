import { HOST, PORT } from "../config/config";

/**
 * Fetches all lessons from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of lesson objects.
 */
export const fetchLessons = async () => {
    try {
      const response = await fetch(`https://${HOST}:${PORT}/lessons`);
      const data = await response.json();
  
      const mappedData = data.map((lesson) => ({
        id: lesson._id,
        name: lesson.name,
        subTitle: lesson.subTitle,
        description: lesson.description,
        words: lesson.words,
      }));
      return mappedData;
    } catch (error) {
      console.error('Error fetching lessons:', error);
      return [];
    }
  };
  
/**
 * Fetches details of a specific lesson from the server.
 * @param {string} lessonId - The ID of the lesson to fetch details for.
 * @returns {Promise<Object|null>} A promise that resolves to the lesson object if found, otherwise null.
 */  
export const fetchLessonsDetail = async (lessonId) => {
    try {
      const response = await fetch(`https://${HOST}:${PORT}/lessons/${lessonId}`);
      const data = await response.json();
  
      if (!data) {
        console.error('Lesson not found');
        return null;
      }
  
      const mappedData = {
        id: data._id,
        name: data.name,
        subTitle: data.subTitle,
        description: data.description,
        words: data.words,
      };
      return mappedData;
    } catch (error) {
      console.error('Error fetching lesson detail:', error);
      return null;
    }
  };
  
