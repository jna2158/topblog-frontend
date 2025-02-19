import React from "react";
import CardList from "../components/organisms/CardList";
import BackgroundImageContainer from "../components/organisms/BackgroundImageContainer";
import DownloadButton from "../components/molecules/button/DownloadButton";

export default function Home() {
  return (
    <>
      <CardList />
      <section className="center gap-4 mt-12 mb-10">
        <DownloadButton os="Windows" />
        <DownloadButton os="Mac" />
      </section>
      <BackgroundImageContainer />
    </>
  );
}
