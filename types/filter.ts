export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface CommonFilterProps {
  title: string;
  options: OptionProps[];
}

export interface OptionProps {
  title: string;
  value: string;
}
