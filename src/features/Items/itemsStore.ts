import { create } from "zustand";
import { TItemId, TItems, TSortBy } from "features/Items/types";
import {
  getItemsFromLStorage,
  getSortRuleFromSS,
  saveItemsToLStorage,
  saveSortRuleToSS,
} from "features/Items/utils";
import { generateId } from "utils/utils";
import { TGroupId } from "features/Groups/types";

type TStore = {
  items: TItems;
  sortRule: TSortBy;
  groupId: TGroupId;

  refreshItems: () => void;
  changeSortRule: (rule: TSortBy) => void;
  toggleItem: (id: TItemId) => void;
  addItem: (text: string) => void;
  changeItemText: (id: TItemId, text: string) => void;
  deleteItem: (id: TItemId) => void;
  setGroupId: (id: TGroupId) => void;
  saveToLocalStorage: () => void;
};

export const useItemsStore = create<TStore>((set, get) => ({
  items: {},
  sortRule: getSortRuleFromSS(),
  groupId: "",

  refreshItems: () => {
    set(({ groupId }) => {
      const items = getItemsFromLStorage(groupId);
      return { items };
    });
  },
  changeSortRule: (rule: TSortBy) => {
    set({ sortRule: rule });
    saveSortRuleToSS(rule);
  },
  toggleItem: (id: TItemId) => {
    set(({ items: prevItems }) => {
      const items = { ...prevItems };
      items[id].checked = !items[id].checked;
      return { items };
    });
    get().saveToLocalStorage();
  },
  addItem: (text: string) => {
    set(({ items }) => {
      const id = generateId();
      const newItem = { id, text, checked: false, updatedAt: Date.now() };
      return { items: { ...items, [id]: newItem } };
    });
    get().saveToLocalStorage();
  },
  changeItemText: (id: TItemId, text: string) => {
    set(({ items }) => {
      const newItems = { ...items };
      newItems[id].text = text;
      newItems[id].updatedAt = Date.now();
      return { items: newItems };
    });
    get().saveToLocalStorage();
  },
  deleteItem: (id: TItemId) => {
    set(({ items }) => {
      const newItems = { ...items };
      delete newItems[id];
      return { items: newItems };
    });
    get().saveToLocalStorage();
  },
  setGroupId: (id: TGroupId) => set({ groupId: id }),
  saveToLocalStorage: () => {
    const { items, groupId } = get();
    saveItemsToLStorage(items, groupId);
  },
}));
