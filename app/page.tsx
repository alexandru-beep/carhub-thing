import { CarCard, Hero } from "@components";

import { fetchCars } from "@utils/utils";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
      </div>

      <section>
        <div className="home__cars-wrapper">
          {/* I cannot cuz of the type error */}
          {/* {allCars?.map((car) => (
            <CarCard car={car} />
          ))} */}
        </div>
      </section>
      {/* {!isDataEmpty ? (
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )} */}
    </main>
  );
}
