import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { NativeSpeakerDetailProvider } from '../../contexts/nativeSpeakerContext';
import NativeSpeakerDetail from './NativeSpeakerDetail';

const NativeSpeakerDetailWrapper = () => {
  const { id } = useParams();
  const location = useLocation();
  const passedNativeSpeaker = location.state?.nativeSpeaker;

  if (passedNativeSpeaker) {
    return <NativeSpeakerDetail nativeSpeaker={passedNativeSpeaker} />;
  } else {
    return (
      <NativeSpeakerDetailProvider nativeSpeakerId={id}>
        {/* Pass lesson prop as null since it's not available */}
        <NativeSpeakerDetail nativeSpeaker={null} />
      </NativeSpeakerDetailProvider>
    );
  }
};

export default NativeSpeakerDetailWrapper;
