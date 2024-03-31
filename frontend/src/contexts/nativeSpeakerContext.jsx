import React, { createContext, useEffect, useState } from 'react';
import { fetchNativeSpeakers, fetchNativeSpeakersDetail } from '../services/nativeSpeakerService';

const NativeSpeakerContext = createContext();
const NativeSpeakerDetailContext = createContext();

export const NativeSpeakersProvider = (props) => {
  const [nativeSpeakers, setNativeSpeakers] = useState([]);

  useEffect(() => {
    const fetchNativeSpeakersData = async () => {
      const fetchedNativeSpeakers = await fetchNativeSpeakers();
      setNativeSpeakers(fetchedNativeSpeakers);
    };
    fetchNativeSpeakersData();
  }, []);

  return <NativeSpeakerContext.Provider value={nativeSpeakers}>{props.children}</NativeSpeakerContext.Provider>;
};

export const NativeSpeakerDetailProvider = (props) => {
  const [nativeSpeakersDetail, setNativeSpeakersDetail] = useState({});
  const { nativeSpeakerId } = props;
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

  return <NativeSpeakerDetailContext.Provider value={nativeSpeakersDetail}>{props.children}</NativeSpeakerDetailContext.Provider>;
};

export { NativeSpeakerContext, NativeSpeakerDetailContext };
