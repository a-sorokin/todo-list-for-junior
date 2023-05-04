import { TSortBy } from "features/Items/types";

export const SORT_RULE_SS_KEY = "sortRule";
export const ITEMS_LS_KEY = "items";

// replace by global version
export const VERSION = 1;

export const SORT_RULES_VIEW_STATE: { [key in TSortBy]: TSortBy } = {
  name: "date",
  date: "name",
};

export const SORTING_RULES = {
  name: "name",
  date: "date",
};
