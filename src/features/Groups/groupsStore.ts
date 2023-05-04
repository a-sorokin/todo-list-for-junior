import { create } from "zustand";
import { TGroup, TGroupId, TGroups } from "features/Groups/types";
import { generateId } from "utils/utils";
import {
  getGroupsFromLS,
  getSelectedGroupIdFromLS,
  removeItemsInGroupInLS,
  saveGroupsToLS,
  saveSelectedGroupIdToLS,
} from "features/Groups/utils";

type TStore = {
  groups: TGroups;
  selectedGroupId: TGroupId | null;

  setSelectedGroupId: (id: TGroupId) => void;
  addGroup: (name: string) => void;
  getGroup: (id: TGroupId) => TGroup;
  updateGroupName: (id: TGroupId, name: string) => void;
  deleteGroup: (id: TGroupId) => void;
};

export const useGroupsStore = create<TStore>((set, get) => ({
  groups: getGroupsFromLS(),
  selectedGroupId: getSelectedGroupIdFromLS(),

  setSelectedGroupId: (id) => {
    set({ selectedGroupId: id });
    saveSelectedGroupIdToLS(id);
  },
  addGroup: (name) => {
    const id = generateId();
    const newGroup = { id, name, items: [], updatedAt: Date.now() };
    set(({ groups }) => {
      const newGroups = { ...groups, [id]: newGroup };
      saveGroupsToLS(newGroups);
      return { groups: newGroups };
    });
    get().setSelectedGroupId(id);
  },
  getGroup: (id) => get().groups[id],
  updateGroupName: (id, name) =>
    set(({ groups }) => {
      const newGroups = {
        ...groups,
        [id]: { ...groups[id], name, updatedAt: Date.now() },
      };
      saveGroupsToLS(newGroups);
      return { groups: newGroups };
    }),
  deleteGroup: (id) => {
    set(({ groups, setSelectedGroupId }) => {
      const newGroups = { ...groups };
      delete newGroups[id];
      saveGroupsToLS(newGroups);
      const keys = Object.keys(newGroups);
      setSelectedGroupId(keys[keys.length - 1]);
      removeItemsInGroupInLS(id);
      return { groups: newGroups };
    });
  },
}));
