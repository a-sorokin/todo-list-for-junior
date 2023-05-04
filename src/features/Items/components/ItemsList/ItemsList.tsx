import { useMemo } from "react";
import styles from "features/Items/components/ItemsList/ItemsList.module.scss";
import { Item } from "features/Items/components/Item/Item";
import { getItemList } from "features/Items/utils";
import { useItemsStore } from "features/Items/itemsStore";

export const ItemsList = () => {
  const { items, sortRule } = useItemsStore();

  const itemList = useMemo(
    () => getItemList(items, sortRule),
    [items, sortRule]
  );

  return (
    <div className={styles.list}>
      {[...itemList.unchecked, ...itemList.checked].map(({ id }) => (
        <Item key={`item.${id}`} id={id} />
      ))}
    </div>
  );
};
