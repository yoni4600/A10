import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NativeSpeakerContext } from "../../contexts/nativeSpeakerContext"

/**
 * NativeSpeakers component is responsible for rendering the list of native speakers.
 * It uses the NativeSpeakerContext to retrieve the native speakers data and provides navigation to the details page.
 */
const NativeSpeakers = () => {
    // Get the list of native speakers from the context
    const nativeSpeakers = useContext(NativeSpeakerContext);
    const navigate = useNavigate();

    // Function to handle click on a native speaker
    const handleNativeSpeakerClick = (nativeSpeaker) => {
        // Navigate to the detail page of the clicked native speaker
        navigate(`/nativeSpeakers/${nativeSpeaker.id}`, { state: { nativeSpeaker } });
    };

    return (
        <div className="bg-customBackground flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="py-12">
                    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-customDiv p-6 rounded-xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {nativeSpeakers.map(nativeSpeaker => (
                                    <div
                                        key={nativeSpeaker.id}
                                        className="text-white  bg-customGrid hover:bg-customGridHover focus:ring-4 focus:ring-customGridHover font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200"
                                        onClick={() => handleNativeSpeakerClick(nativeSpeaker)}
                                    >
                                        {nativeSpeaker.username}
                                        <br/>
                                        {nativeSpeaker.language}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NativeSpeakers;
