import { deleteIcon } from "assets/deleteIcon";
import { useItemsStore } from "features/Items/itemsStore";
import { FC } from "react";
import { TItemId } from "features/Items/types";

export const DeleteItem: FC<{ id: TItemId }> = ({ id }) => {
  const { deleteItem } = useItemsStore();

  return <button onClick={() => deleteItem(id)}>{deleteIcon}</button>;
};
