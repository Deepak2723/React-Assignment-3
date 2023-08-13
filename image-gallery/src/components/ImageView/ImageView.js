import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ImageView.css';

function ImageView() {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(
          `https://api.slingacademy.com/v1/sample-data/photos/${id}`
        );
        setImage(response.data.photo);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }

    fetchImage();
  }, [id]);

  if (!image) {
    return <div className='imageview-loading'>Loading...</div>;
  }

  return (
    <div className="ImageView">
      <Link to="/" className="back-link">
        <h1>Back to Gallery</h1>
      </Link>
      <img  className src={image.url} alt={image.title} />
      <h1 className='image-title'>{image.title}</h1>
      <p>{image.description}</p>
    </div>
  );
}

export default ImageView;





