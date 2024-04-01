import React, { useContext } from 'react';
import { NativeSpeakerDetailContext } from '../../contexts/nativeSpeakerContext';
import { useNavigate} from 'react-router-dom';

const NativeSpeakerDetail = ({ nativeSpeaker }) => {
  const nativeSpeakersDetailContext = useContext(NativeSpeakerDetailContext);
  const nativeSpeakersDetail = nativeSpeaker || nativeSpeakersDetailContext;
  const navigate = useNavigate();
  if (!nativeSpeakersDetail) {
    return <div>Loading...</div>;
  }

  const mappedData = {
    id: nativeSpeakersDetail._id,
    name: nativeSpeakersDetail.name,
    country: nativeSpeakersDetail.country,
    description: nativeSpeakersDetail.description,
    rating: nativeSpeakersDetail.rating,
  };

  const handleStartSession = () => {
    navigate('/nativeSpeakers');
  };
  const handleBackBtn = () => {
    navigate('/nativeSpeakers');
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-customBackground">
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <div className="py-12">
              <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-customDiv p-6 rounded-xl shadow-xl">
                  <h2 className="text-xl font-semibold mb-4">{mappedData.name}</h2>
                  {/* <p className="text-gray-700 mb-4">{mappedData.description}</p> */}
                  <h3 className="text-lg font-semibold mb-2">Native Speaker Details:</h3>

                  {/* Render nativeSpeaker Content */}
                  {Object.entries(mappedData).map(([key, value]) => (
                    key === 'rating' ? null : // Skip rendering the rating
                    key === 'name' ? null : // Skip rendering the null  
                    <div key={key} className="mb-4">
                      {typeof value === 'object' ? (
                        <div className="ml-4">
                          {Object.entries(value).map(([nestedKey, nestedValue]) => (
                            <div key={nestedKey} className="mb-2">
                              <li><strong>{nestedKey}:</strong> {nestedValue}</li>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700">{value}</p>
                      )}
                    </div>
                  ))}
                  <div className='flex justify-end'>
                    <div className=" flex flex-col ">
                        <button
                          onClick={handleStartSession}
                          className="mb-2 bg-customSubmmit hover:bg-customSubmmitHover text-white font-bold py-2 px-4 rounded"
                        >
                          Start Session
                        </button>
                        <button
                          onClick={handleBackBtn}
                          className="bg-customSubmmit hover:bg-customSubmmitHover text-white font-bold py-2 px-4 rounded"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default NativeSpeakerDetail;
