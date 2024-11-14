import React, { useState, useEffect } from 'react';

function RandomDogImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div className="dog-image-container">
      <h1>Случайное изображение собаки</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        imageUrl && <img src={imageUrl} alt="Random Dog" className="dog-image" />
      )}
    </div>
  );
}

export default RandomDogImage;
