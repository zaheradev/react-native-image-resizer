import React from 'react-native';

const ImageResizerAndroid = React.NativeModules.ImageResizerAndroid;

export default {
  createResizedImage: (imagePath, newWidth, newHeight, compressFormat, quality,ar, rotation = 0, outputPath) => {
    return new Promise((resolve, reject) => {
      ImageResizerAndroid.createResizedImage(
        imagePath,
        newWidth,
        newHeight,
        compressFormat,
        quality,
        ar,
        rotation,
        outputPath,
        resolve,
        reject
      );
    });
  },
};
