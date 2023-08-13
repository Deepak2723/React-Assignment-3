import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(
          `https://api.slingacademy.com/v1/sample-data/photos?offset=${currentPage}&limit=20`
        );
        setImages(response.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Gallery">
      <h1>Image Gallery</h1>
      <div className="images">
        {images.map((image) => (
          <Link to={`/image/${image.id}`} key={image.id} className="image">
            <img src={image.url} alt={image.title} />
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <BsArrowLeft /> Previous
        </button>
        <button onClick={nextPage}>
          Next <BsArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Gallery;
