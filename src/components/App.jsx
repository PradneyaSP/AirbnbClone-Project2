import "../styles.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import dataCards from "../data";

export default function App() {
  const Cards = dataCards.map((data) => {
    return (
      <Card
        //Instead of passing each attribute , You can just pass the object "data"!!
        src={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        openSpots={data.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">{Cards}</section>
    </div>
  );
}

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
