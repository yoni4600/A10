import React from 'react';
import { useParams } from 'react-router-dom';
import { LessonDetailProvider } from '../../contexts/lessonContext';
import LessonDetail from './LessonDetail';

const LessonDetailWrapper = () => {
  const { id } = useParams();
  return (
    <LessonDetailProvider lessonId={id}>
      <LessonDetail />
    </LessonDetailProvider>
  );
};

export default LessonDetailWrapper;
