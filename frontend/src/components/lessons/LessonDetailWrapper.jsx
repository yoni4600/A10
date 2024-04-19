import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { LessonDetailProvider } from '../../contexts/lessonContext';
import LessonDetail from './LessonDetail';

const LessonDetailWrapper = () => {
  const { id } = useParams();
  const location = useLocation();
  const passedLesson = location.state?.lesson;

  if (passedLesson) {
    return <LessonDetail lesson={passedLesson} />;
  } else {
    return (
      <LessonDetailProvider lessonId={id}>
        <LessonDetail lesson={null} />
      </LessonDetailProvider>
    );
  }
};

export default LessonDetailWrapper;
