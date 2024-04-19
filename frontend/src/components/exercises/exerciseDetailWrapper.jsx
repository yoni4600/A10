import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ExerciseDetailProvider } from '../../contexts/exerciseContext';
import ExerciseDetail from './exerciseDetail';

/**
 * ExerciseDetailWrapper component fetches exercise details based on the provided exercise ID and renders the ExerciseDetail component.
 */
const ExerciseDetailWrapper = () => {
  const { id } = useParams();
  const location = useLocation();
  const passedExercise = location.state?.exercise;

  // If exercise details are passed from location state, render ExerciseDetail with passed exercise
  if (passedExercise) {
    return <ExerciseDetail exercise={passedExercise} />;
  } else {
    // Otherwise, fetch exercise details using ExerciseDetailProvider
    return (
      <ExerciseDetailProvider exerciseId={id}>
        {/* Pass exercise prop as null since it's not available */}
        <ExerciseDetail exercise={null} />
      </ExerciseDetailProvider>
    );
  }
};

export default ExerciseDetailWrapper;
