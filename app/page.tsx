import { CarCard, CustomFilter, Hero, SearchBar } from "@components";
import { fuels, yearsOfProduction } from "@constants/constants";
import { CarProps, FilterProps } from "@/types/types";
import { fetchCars } from "@utils/utils";
import ShowMore from "@components/ShowMore";

interface PageProps {
  searchParams: {
    manufacturer?: string;
    year?: number;
    fuel?: string;
    model?: string;
    limit?: number;
    pageNumber: number;
    isNext: number;
  };
}

export default async function Home({ searchParams }: PageProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
    // very unfortunate but 'limit' is not available for regular users, so I cannot show only 10 different cars if there is nothing in searchParams or user didn't provide any :(
    limit: searchParams.limit || 10,
  });

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

      <div className="home__filters padding-x padding-y">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      {!isDataEmpty ? (
        <section className="padding-x padding-y">
          <div className="home__cars-wrapper">
            {allCars?.map((car: CarProps) => (
              <CarCard car={car} key={car.model + car.year} />
            ))}
          </div>

          <ShowMore
            pageNumber={(searchParams?.pageNumber || 10) / 10}
            isNext={searchParams?.isNext > 10}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </main>
  );
}
