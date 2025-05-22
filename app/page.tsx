"use client";

import { useEffect, useState } from "react";
import { CarCard, CustomFilter, Hero, SearchBar } from "@components";
import { fuels, yearsOfProduction } from "@constants/constants";
import { CarProps } from "@/types/types";
import { fetchCars } from "@utils/utils";
import Image from "next/image";
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

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2023);

  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "Audi",
        year: year || 2023,
        model: model || "",
        fuel: fuel || "fuel",
        // very unfortunate but 'limit' is not available for regular users, so I cannot show only 10 different cars if there is nothing in searchParams or user didn't provide any :(
        limit: limit || 10,
      });

      setAllCars(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, year, limit, fuel]);

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
        <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

        <div className="home__filter-container">
          <CustomFilter
            title="fuel"
            options={fuels}
            setFilter={(value) => setFuel(value)}
          />
          <CustomFilter
            title="year"
            options={yearsOfProduction}
            setFilter={(value) => setYear(Number(value))}
          />
        </div>
      </div>

      {allCars.length > 0 ? (
        <section className="padding-x padding-y">
          <div className="home__cars-wrapper">
            {allCars?.map((car: CarProps) => (
              <CarCard car={car} key={car.model + car.year} />
            ))}
          </div>

          {loading && (
            <div>
              {/* <Image
                src="/loader.svg"
                alt="loader"
                width={50}
                height={50}
                className="object-contain"
              /> */}
              Loading...
            </div>
          )}

          <ShowMore
            pageNumber={limit || 10}
            isNext={limit > 10}
            setLimit={setLimit}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        </div>
      )}
    </main>
  );
}
