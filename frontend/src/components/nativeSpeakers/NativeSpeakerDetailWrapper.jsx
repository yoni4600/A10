import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { NativeSpeakerDetailProvider } from '../../contexts/nativeSpeakerContext';
import NativeSpeakerDetail from './NativeSpeakerDetail';

/**
 * NativeSpeakerDetailWrapper component is responsible for rendering the NativeSpeakerDetail component with the necessary context provider.
 * It retrieves the native speaker data from the location state or props, and renders the NativeSpeakerDetail component accordingly.
 */
const NativeSpeakerDetailWrapper = () => {
  // Get the ID parameter from the URL
  const { id } = useParams();
  // Extract the native speaker data from the location state
  const location = useLocation();
  // Extract the native speaker data from the location state
  const passedNativeSpeaker = location.state?.nativeSpeaker;

  // Render NativeSpeakerDetail with the provided native speaker data
  if (passedNativeSpeaker) {
    return <NativeSpeakerDetail nativeSpeaker={passedNativeSpeaker} />;
  } else {
    
    // If native speaker data is not available, render NativeSpeakerDetailProvider with the native speaker ID
    return (
      <NativeSpeakerDetailProvider nativeSpeakerId={id}>
        {/* Pass lesson prop as null since it's not available */}
        <NativeSpeakerDetail nativeSpeaker={null} />
      </NativeSpeakerDetailProvider>
    );
  }
};

export default NativeSpeakerDetailWrapper;
