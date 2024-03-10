import React, { useContext } from 'react';
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
    console.log("this is else", id)
    return (
      <LessonDetailProvider lessonId={id}>
        {/* Pass lesson prop as null since it's not available */}
        <LessonDetail lesson={null} />
      </LessonDetailProvider>
    );
  }
};

export default LessonDetailWrapper;
