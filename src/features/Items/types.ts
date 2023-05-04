import { SORTING_RULES } from "features/Items/constant";

export type TItemList = { unchecked: TItem[]; checked: TItem[] };

export type TSortBy = (typeof SORTING_RULES)[keyof typeof SORTING_RULES];

export type TItemId = string;

export type TItem = {
  id: TItemId;
  text: string;
  checked: boolean;
  updatedAt: number;
};

export type TItems = { [key in TItemId]: TItem };
