import React, { createContext, useEffect, useState } from 'react';
import { fetchNativeSpeakers, fetchNativeSpeakersDetail } from '../services/nativeSpeakerService';

const NativeSpeakerContext = createContext();
const NativeSpeakerDetailContext = createContext();

// Provider component for managing native speakers
export const NativeSpeakersProvider = (props) => {
  const [nativeSpeakers, setNativeSpeakers] = useState([]);

  useEffect(() => {
    const fetchNativeSpeakersData = async () => {
      const fetchedNativeSpeakers = await fetchNativeSpeakers();
      setNativeSpeakers(fetchedNativeSpeakers);
    };
    fetchNativeSpeakersData();
  }, []);

  // Render the NativeSpeakerContext.Provider with the fetched native speakers
  return <NativeSpeakerContext.Provider value={nativeSpeakers}>{props.children}</NativeSpeakerContext.Provider>;
};

// Provider component for managing native speaker details
export const NativeSpeakerDetailProvider = (props) => {
  const [nativeSpeakersDetail, setNativeSpeakersDetail] = useState({});
  const { nativeSpeakerId } = props;

  // Fetch native speaker details when nativeSpeakerId changes
  useEffect(() => {
    const fetchNativeSpeakersDetailData = async () => {
      const fetchedNativeSpeakersDetail = await fetchNativeSpeakersDetail(nativeSpeakerId);
      setNativeSpeakersDetail(fetchedNativeSpeakersDetail);
    };
  
    // Only fetch nativeSpeaker detail when nativeSpeakerId is available
    if (nativeSpeakerId) {
      fetchNativeSpeakersDetailData();
    }
  }, [nativeSpeakerId]);
  
  // Render the NativeSpeakerDetailContext.Provider with the fetched native speaker detail
  return <NativeSpeakerDetailContext.Provider value={nativeSpeakersDetail}>{props.children}</NativeSpeakerDetailContext.Provider>;
};

export { NativeSpeakerContext, NativeSpeakerDetailContext };
