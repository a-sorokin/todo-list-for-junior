import { getItemsFromLS, saveItemsToLS } from "utils/utils";
import { TGroupId, TGroups } from "features/Groups/types";
import { ITEMS_LS_KEY } from "features/Items/constant";
import { TItems } from "features/Items/types";

const LS_GROUPS_KEY = "groups";
const LS_SELECTED_GROUP_ID_KEY = "selectedGroupId";

export const getGroupsFromLS = (): TGroups => {
  return (getItemsFromLS(LS_GROUPS_KEY) as TGroups) || {};
};

export const getSelectedGroupIdFromLS = (): TGroupId => {
  return getItemsFromLS(LS_SELECTED_GROUP_ID_KEY) as TGroupId | "";
};

export const saveGroupsToLS = (groups: TGroups): void => {
  saveItemsToLS(LS_GROUPS_KEY, groups);
};

export const saveSelectedGroupIdToLS = (id: TGroupId): void => {
  saveItemsToLS(LS_SELECTED_GROUP_ID_KEY, id);
};

export const removeItemsInGroupInLS = (groupId: TGroupId): void => {
  const items = getItemsFromLS(ITEMS_LS_KEY) as TItems;
  delete items[groupId];
  saveItemsToLS(ITEMS_LS_KEY, items);
};
