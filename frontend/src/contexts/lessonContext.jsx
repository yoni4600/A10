import React, { createContext, useEffect, useState } from 'react';
import { fetchLessons, fetchLessonsDetail } from '../services/lessonService';

const LessonContext = createContext();
const LessonDetailContext = createContext();

export const LessonsProvider = (props) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessonsData = async () => {
      const fetchedLessons = await fetchLessons();
      setLessons(fetchedLessons);
    };
    fetchLessonsData();
  }, []);

  return <LessonContext.Provider value={lessons}>{props.children}</LessonContext.Provider>;
};

export const LessonDetailProvider = (props) => {
  const [lessonsDetail, setLessonsDetail] = useState({});
  const { lessonId } = props;
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

  return <LessonDetailContext.Provider value={lessonsDetail}>{props.children}</LessonDetailContext.Provider>;
};

export { LessonContext, LessonDetailContext };
