import React, { useContext } from 'react';
import { LessonDetailContext } from '../../contexts/lessonContext';

const LessonDetail = ({ lesson }) => {
  const lessonsDetailContext = useContext(LessonDetailContext);
  const lessonsDetail = lesson || lessonsDetailContext;

  if (!lessonsDetail) {
    return <div>Loading...</div>;
  }

  const mappedData = {
    id: lessonsDetail._id,
    name: lessonsDetail.name,
    subTitle: lessonsDetail.subTitle,
    description: lessonsDetail.description,
    words: lessonsDetail.words,
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
                  <p className="text-gray-700 mb-4">{mappedData.description}</p>
                  <h3 className="text-lg font-semibold mb-2">Lesson Content</h3>

                  {/* Render Lesson Content */}
                  {Object.entries(mappedData).map(([key, value]) => (
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
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default LessonDetail;
