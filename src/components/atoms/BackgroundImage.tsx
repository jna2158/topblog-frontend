import React from "react";
import { CSSProperties } from "react";

interface BackgroundImageProps {
  src: string;
  alt: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => {
  const imageStyle = { width: "100%", maxWidth: "1000px", margin: "0 auto" };
  const relativeStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    margin: "0 auto",
    maxWidth: "1000px",
  };

  return (
    <div style={relativeStyle}>
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  );
};

export default BackgroundImage;
