import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { LessonDetailProvider } from '../../contexts/lessonContext';
import LessonDetail from './LessonDetail';

/**
 * LessonDetailWrapper component is responsible for rendering the LessonDetail component with the provided lesson data.
 * If the lesson data is available, it renders the LessonDetail component with the passed lesson.
 * If the lesson data is not available, it renders the LessonDetail component with a loading state.
 */
const LessonDetailWrapper = () => {
  // Retrieve lesson ID from the URL parameters
  const { id } = useParams();
  // Retrieve location object from the current route
  const location = useLocation();
  // Get the passed lesson data from the location state
  const passedLesson = location.state?.lesson;

  // If the lesson data is passed, render the LessonDetail component with the passed lesson
  if (passedLesson) {
    return <LessonDetail lesson={passedLesson} />;
  } else {
    // If the lesson data is not passed, render the LessonDetail component with a loading state
    return (
      <LessonDetailProvider lessonId={id}>
        <LessonDetail lesson={null} />
      </LessonDetailProvider>
    );
  }
};

export default LessonDetailWrapper;
