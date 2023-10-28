// ImageDisplay.js
import React from 'react';

function ImageDisplay({ imagePath }) {
  return (
    <img src={require(`${imagePath}`)} alt="Dynamic Image" />
  );
}

export default ImageDisplay;
