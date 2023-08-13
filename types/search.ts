import { FilterProps } from "./filter";

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface HomeProps {
  searchParams: FilterProps;
}
