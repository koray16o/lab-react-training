import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [image, setImage] = useState(true);

  const changeImage = () => {
    setImage(!image);
  };
  return (
    <div style={{ cursor: 'pointer' }} onClick={changeImage}>
      {image ? (
        <img src={img} alt="ClickablePicture" />
      ) : (
        <img src={imgClicked} alt="ClickablePicture" />
      )}
    </div>
  );
};
export default ClickablePicture;
