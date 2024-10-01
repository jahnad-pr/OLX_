

export const getCroppedImg = (imageSrc, crop) => {
  const image = new Image();
  image.src = imageSrc;
  return new Promise((resolve, reject) => {
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((blob) => {
        if (!blob) {
          return reject(new Error('Canvas is empty'));
        }
        const croppedImageUrl = URL.createObjectURL(blob);
        resolve(croppedImageUrl); // Return the cropped image as a blob URL
      }, 'image/jpeg');
    };
    image.onerror = () => {
      reject(new Error('Failed to load image'));
    };
  });
};
