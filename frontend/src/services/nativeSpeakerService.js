import { HOST, PORT } from "../config/config";

/**
 * Fetches all native speakers from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of native speaker objects.
 */
export const fetchNativeSpeakers = async () => {
    try {
      const response = await fetch(`https://${HOST}:${PORT}/nativeSpeakers`);

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

/**
 * Fetches details of a specific native speaker from the server.
 * @param {string} nativeSpeakerId - The ID of the native speaker to fetch details for.
 * @returns {Promise<Object|null>} A promise that resolves to the native speaker object if found, otherwise null.
 */
export const fetchNativeSpeakersDetail = async (nativeSpeakerId) => {
    try {
      const response = await fetch(`https://${HOST}:${PORT}/user/${nativeSpeakerId}`);
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
  
