import { HOST, PORT } from "../config/config";

export const fetchNativeSpeakers = async () => {
    try {
      // const response = await fetch(`https://${HOST}:${PORT}/nativeSpeakers`);
      const response = await fetch(`http://${HOST}:${PORT}/nativeSpeakers`);

      const data = await response.json();
  
      const mappedData = data.map((nativeSpeaker) => ({
        id: nativeSpeaker._id,
        username: nativeSpeaker.username,
        userType: nativeSpeaker.userType,
        isAvailable: nativeSpeaker.isAvailable,
        language: nativeSpeaker.language,
        country: nativeSpeaker.country,
        description: nativeSpeaker.description,
        zoomLink: nativeSpeaker.zoomLink,
      }));
      return mappedData;
    } catch (error) {
      console.error('Error fetching nativeSpeakers:', error);
      return [];
    }
  };
  
  export const fetchNativeSpeakersDetail = async (nativeSpeakerId) => {
    try {
      const response = await fetch(`http://${HOST}:${PORT}/user/${nativeSpeakerId}`);
      const data = await response.json();
  
      if (!data) {
        console.error('nativeSpeakers not found');
        return null;
      }
  
      const mappedData = {
        id: data._id,
        name: data.name,
        language: data.language,
        country: data.country,
        description: data.description,
        rating: data.rating,
      };
      return mappedData;
    } catch (error) {
      console.error('Error fetching nativeSpeaker detail:', error);
      return null;
    }
  };
  
