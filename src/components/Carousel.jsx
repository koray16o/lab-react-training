import { useState } from 'react';

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    setImageIndex(imageIndex < images.length - 1 ? imageIndex + 1 : 0);
  };

  const handlePreviousImage = () => {
    setImageIndex(imageIndex > 0 ? imageIndex - 1 : images.length - 1);
  };

  return (
    <div>
      <img style={{ width: '200px' }} src={images[imageIndex]} alt="Random" />
      <div className="">
        <button onClick={handlePreviousImage}>Left</button>
        <button onClick={handleNextImage}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
