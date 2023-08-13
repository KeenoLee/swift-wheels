import { CarCard, CommonFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types/search";
import { fetchCars } from "@/utiles";

export default async function Home({ searchParams }: HomeProps) {
  const allCarsList = await fetchCars({
    manufacturer: searchParams.manufacturer || "honda",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCarsList) || allCarsList.length < 1;
  console.log("allCarsList.length ", allCarsList.length);

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
            {searchParams.limit >= allCarsList.length ? (
              <></>
            ) : (
              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCarsList.length}
              />
            )}
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
