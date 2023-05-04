import { TItem, TItemList, TItems, TSortBy } from "features/Items/types";
import {
  ITEMS_LS_KEY,
  SORT_RULE_SS_KEY,
  SORTING_RULES,
  VERSION,
} from "features/Items/constant";
import { getItemsFromLS, saveItemsToLS } from "utils/utils";
import { TGroupId } from "features/Groups/types";

export const SORTING_METHODS = {
  [SORTING_RULES.name]: (a: TItem, b: TItem) => a.text.localeCompare(b.text),
  [SORTING_RULES.date]: (a: TItem, b: TItem) => a.updatedAt - b.updatedAt,
};

export const getItemList = (items: TItems, sortOption: TSortBy) =>
  Object.values(items)
    .sort(SORTING_METHODS[sortOption])
    .reduce(
      (acc, item) => {
        if (item.checked) acc.checked.push(item);
        else acc.unchecked.push(item);
        return acc;
      },
      { unchecked: [], checked: [] } as TItemList
    );

export const saveSortRuleToSS = (item: TSortBy) => {
  const paramsWithVersion = { [VERSION]: item };
  window.sessionStorage.setItem(SORT_RULE_SS_KEY, "");
  window.sessionStorage.setItem(
    SORT_RULE_SS_KEY,
    JSON.stringify(paramsWithVersion)
  );
};

export const getSortRuleFromSS = () => {
  const sortStrategy = window.sessionStorage.getItem(SORT_RULE_SS_KEY);
  return sortStrategy ? JSON.parse(sortStrategy)[VERSION] : SORTING_RULES.name;
};

export const saveItemsToLStorage = (items: TItems, groupId: TGroupId) => {
  const prevItems = getItemsFromLS(ITEMS_LS_KEY) || {};
  saveItemsToLS(ITEMS_LS_KEY, { ...prevItems, [groupId]: items });
};

export const getItemsFromLStorage = (groupId: TGroupId): TItems => {
  const items =
    (getItemsFromLS(ITEMS_LS_KEY) as { [key in TGroupId]: TItems }) || {};
  return items[groupId] || {};
};
