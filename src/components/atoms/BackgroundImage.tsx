import React from "react";
import { CSSProperties } from "react";

interface BackgroundImageProps {
  src: string;
  alt: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => {
  const imageStyle = {
    width: "150%",
    maxWidth: "none",
    margin: "0 auto",
    display: "block",
  };
  const relativeStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    margin: "0 auto",
    maxWidth: "1150px",
  };

  return (
    <div style={relativeStyle} className="center">
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  );
};

export default BackgroundImage;
