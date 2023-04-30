// create your App component here
import { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDogImage() {
      setIsLoading(true);

      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();

      setDogImage(data.message);
      setIsLoading(false);
    }

    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

