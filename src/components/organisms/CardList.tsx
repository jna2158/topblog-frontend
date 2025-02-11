import React from "react";
import Card from "../molecules/Card";

export default function CardList() {
  return (
    <section className="flex gap-4 mb-28 mt-16 mx-5">
      <Card />
      <Card />
      <Card />
    </section>
  );
}
