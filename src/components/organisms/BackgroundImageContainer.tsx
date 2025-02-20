import BackgroundImage from "../atoms/BackgroundImage";
import React, { CSSProperties } from "react";

export default function BackgroundImageContainer() {
  const relativeStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    margin: "0 auto",
    maxWidth: "70%",
  };

  return (
    <section>
      {[
        "/images/background/01.gif",
        "/images/background/02.gif",
        "/images/background/03.gif",
        "/images/background/04.gif",
        "/images/background/05.gif",
        "/images/background/06.gif",
        "/images/background/07.gif",
        "/images/background/08.gif",
      ].map((src) => (
        <BackgroundImage key={src} src={src} alt="img" />
      ))}

      <div style={relativeStyle}>
        <img
          src="/images/background/09_01.gif"
          alt="gif"
          style={{
            position: "absolute",
            top: "8%",
            width: "100%",
          }}
        />
        <img
          src="/images/background/09_02.gif"
          alt="logo"
          style={{ width: "100%" }}
        />
      </div>

      {[
        "/images/background/10.gif",
        "/images/background/11.gif",
        "/images/background/12.gif",
      ].map((src) => (
        <BackgroundImage key={src} src={src} alt="img" />
      ))}
    </section>
  );
}
