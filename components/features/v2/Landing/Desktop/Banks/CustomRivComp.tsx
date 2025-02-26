import React, { useEffect } from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

interface RivePageProps {
  file: string;
  customStyles?: React.CSSProperties;
}

const CustomRivPage = ({ file, customStyles }: RivePageProps) => {
  const { rive, RiveComponent } = useRive({
    src: file,
    autoplay: false, // Set autoplay to false initially
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const handleClick = () => {
    console.log("hji", rive);
    if (rive) {
      rive.reset(); // Reset the animation
      rive.play(); // Play the animation
    } else {
      console.error("Rive object is not available.");
    }
  };

  useEffect(() => {
    if (rive) {
      rive.play(); // Optionally play the animation on mount
    }
  }, [rive]);

  return (
    <div onClick={handleClick} style={customStyles}>
      <RiveComponent />
    </div>
  );
};

export default CustomRivPage;