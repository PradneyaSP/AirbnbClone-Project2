import React from "react";

export default function Hero() {
  return (
    <section>
      <main className="hero">
        <img
          className="hero--image"
          src="/assets/images/hero-img.png"
          alt="hero-img"
        />
        <div className="hero--heading">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </main>
    </section>
  );
}
