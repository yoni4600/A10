import React, { createContext, useEffect, useState } from 'react';
import { fetchLessons, fetchLessonsDetail } from '../services/lessonService';

const LessonContext = createContext();
const LessonDetailContext = createContext();

// Provider component for managing lessons
export const LessonsProvider = (props) => {
  // State to store lessons
  const [lessons, setLessons] = useState([]);

  // Fetch lessons from the service when the component mounts
  useEffect(() => {
    const fetchLessonsData = async () => {
      const fetchedLessons = await fetchLessons();
      setLessons(fetchedLessons);
    };
    fetchLessonsData();
  }, []);

  // Render the LessonContext.Provider with the fetched lessons
  return <LessonContext.Provider value={lessons}>{props.children}</LessonContext.Provider>;
};

// Provider component for managing lesson details
export const LessonDetailProvider = (props) => {
  const [lessonsDetail, setLessonsDetail] = useState({});
  const { lessonId } = props;

  // Fetch lesson details when lessonId changes
  useEffect(() => {
    const fetchLessonsDetailData = async () => {
      const fetchedLessonsDetail = await fetchLessonsDetail(lessonId);
      setLessonsDetail(fetchedLessonsDetail);
    };
  
    // Only fetch lesson detail when lessonId is available
    if (lessonId) {
      fetchLessonsDetailData();
    }
  }, [lessonId]);
  
  // Render the LessonDetailContext.Provider with the fetched lesson detail
  return <LessonDetailContext.Provider value={lessonsDetail}>{props.children}</LessonDetailContext.Provider>;
};

export { LessonContext, LessonDetailContext };
