import React, { useState, useEffect } from 'react';

function ImageDisplay({ imageBytes }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Create a Blob from the image bytes
    const blob = new Blob([imageBytes]);

    // Create an object URL from the Blob
    const url = URL.createObjectURL(blob);

    setImageUrl(url);

    // Clean up the object URL when the component unmounts to avoid memory leaks
    return () => URL.revokeObjectURL(url);
  }, [imageBytes]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Image" />}
    </div>
  );
}

export default ImageDisplay;
