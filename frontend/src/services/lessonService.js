export const fetchLessons = async () => {
    try {
        const response = await fetch('http://localhost:4000/lessons'); // Add http:// to the URL
        const data = await response.json();
        
        // Map the data to the desired format
        const mappedData = data.map(lesson => ({
            id: lesson._id,
            name: lesson.name,
            subTitle: lesson.subTitle,
            description: lesson.description,
            words: lesson.words,
        }));
        console.log(mappedData);
        return mappedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
