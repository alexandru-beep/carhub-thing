import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManuFacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  angle?: string;
  [key: string]: any;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (value: string) => void;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (value: number) => void;
}
