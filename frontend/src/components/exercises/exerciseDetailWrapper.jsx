import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ExerciseDetailProvider } from '../../contexts/exerciseContext';
import ExerciseDetail from './exerciseDetail';

const ExerciseDetailWrapper = () => {
  const { id } = useParams();
  const location = useLocation();
  const passedExercise = location.state?.exercise;
  if (passedExercise) {
    return <ExerciseDetail exercise={passedExercise} />;
  } else {
    return (
      <ExerciseDetailProvider exerciseId={id}>
        {/* Pass exercise prop as null since it's not available */}
        <ExerciseDetail exercise={null} />
      </ExerciseDetailProvider>
    );
  }
};

export default ExerciseDetailWrapper;
