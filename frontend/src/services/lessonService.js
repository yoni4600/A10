import { HOST, PORT } from "../config/config";

export const fetchLessons = async () => {
    try {
      const response = await fetch(`http://${HOST}:${PORT}/lessons`);
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
  
  export const fetchLessonsDetail = async (lessonId) => {
    try {
      const response = await fetch(`http://${HOST}:${PORT}/lessons/${lessonId}`);
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
  
