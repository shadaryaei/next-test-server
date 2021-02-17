// * node_modules
import { SyntheticEvent } from 'react';
import NextImage from 'next/image';

const Image = ({ src, ...otherProps }) => {
  const handleImageError = (event) => {
    const target = event.target;

    // eslint-disable-next-line no-param-reassign
    target.onerror = null;
    // eslint-disable-next-line no-param-reassign
    target.srcset = '/_next/image?url=%2Fimages%2Fimage-placeholder.png&w=256&q=75';
    // eslint-disable-next-line no-param-reassign
    target.src = '/_next/image?url=%2Fimages%2Fimage-placeholder.png&w=256&q=75';
  };

  return (
    <NextImage
      src={src}
      onError={handleImageError}
      {...otherProps}
    />
  );
};

export default Image;
