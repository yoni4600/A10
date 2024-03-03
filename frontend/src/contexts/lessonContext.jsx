import React, { createContext, useEffect, useState } from 'react';
import { fetchLessons } from '../services/lessonService';

const LessonContext = createContext();

export const LessonsProvider = ( props ) => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const fetchLessonsData = async () => {

          const fetchedLessons = await fetchLessons();
          setLessons(fetchedLessons);
        };
        fetchLessonsData();
    }, []);

    return (
        <LessonContext.Provider value={lessons}>
          {props.children}
        </LessonContext.Provider>
    );
}

export { LessonContext };


