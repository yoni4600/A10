import React, { createContext, useEffect, useState } from 'react';
import { fetchExercises, fetchExerciseDetail } from '../services/exerciseService';

const ExerciseContext = createContext();
const ExerciseDetailContext = createContext(); // Add ExerciseDetailContext

export const ExerciseProvider = (props) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const fetchedExercises = await fetchExercises();
      setExercises(fetchedExercises);
    };
    fetchExercisesData();
  }, []);

  return (
    <ExerciseContext.Provider value={exercises}>
      {/* Provide ExerciseDetailContext */}
      <ExerciseDetailContext.Provider value={null}>
        {props.children}
      </ExerciseDetailContext.Provider>
    </ExerciseContext.Provider>
  );
};

// Add ExerciseDetailProvider
export const ExerciseDetailProvider = (props) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { exerciseId } = props;

  useEffect(() => {
    const fetchExerciseDetailData = async () => {
      const fetchedExerciseDetail = await fetchExerciseDetail(exerciseId);
      setExerciseDetail(fetchedExerciseDetail);
    };
  
    // Only fetch exercise detail when exerciseId is available
    if (exerciseId) {
      fetchExerciseDetailData();
    }
  }, [exerciseId]);

  return (
    <ExerciseDetailContext.Provider value={exerciseDetail}>
      {props.children}
    </ExerciseDetailContext.Provider>
  );
};

export { ExerciseContext, ExerciseDetailContext }; // Export ExerciseDetailContext
