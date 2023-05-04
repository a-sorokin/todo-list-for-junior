import { FC, useCallback, useMemo } from "react";
import styles from "features/Items/components/Item/Item.module.scss";
import { CheckBox } from "components/CheckBox/CheckBox";
import { TItemId } from "features/Items/types";
import { useItemsStore } from "features/Items/itemsStore";
import { DeleteItem } from "features/Items/components/DeleteItem";
import { ItemTitle } from "features/Items/components/ItemTitle/ItemTitle";

type TProps = { id: TItemId };

export const Item: FC<TProps> = ({ id }) => {
  const { items, toggleItem } = useItemsStore();
  const { checked, text } = useMemo(() => items[id], [items, id]);

  const toggleHandler = useCallback(() => toggleItem(id), [id, toggleItem]);

  return (
    <div className={styles.item}>
      <DeleteItem id={id} />
      <CheckBox checked={checked} onChange={toggleHandler} />
      <ItemTitle id={id} text={text} />
    </div>
  );
};
