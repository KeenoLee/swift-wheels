import { CarCard, CommonFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utiles";

export default async function Home({ searchParams }) {
  const allCarsList = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCarsList) || allCarsList.length < 0;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-wiidth" id="discover">
        <div className="home-text-container">
          <h1 className="text-4xl font-extrabold">BUILD & PRICE</h1>
          <p>Pick the cars you might like</p>
        </div>
        <div className="home-filters">
          <SearchBar />
          <div className="home-filter-container">
            <CommonFilter title="fuel" options={fuels} />
            <CommonFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home-cars-wrapper">
              {allCarsList?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home-error-container">
            <h2 className="text-black text-xl">Oops, no results</h2>
            <p>{allCarsList?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
