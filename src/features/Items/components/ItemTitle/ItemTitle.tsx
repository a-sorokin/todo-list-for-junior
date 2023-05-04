import { Input } from "components/Input/Input";
import styles from "features/Items/components/Item/Item.module.scss";
import { FC, useCallback, useState } from "react";
import { useItemsStore } from "features/Items/itemsStore";
import { TItemId } from "features/Items/types";

export const ItemTitle: FC<{ id: TItemId; text: string }> = ({ id, text }) => {
  const { changeItemText } = useItemsStore();
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState(text);

  const setNewValueHandler = useCallback((value: string) => {
    setNewValue(value);
  }, []);

  const changeText = useCallback(() => {
    changeItemText(id, newValue);
    setEditing(false);
  }, [changeItemText, id, newValue]);

  return (
    <>
      {editing ? (
        <Input
          label="Edit item"
          value={newValue}
          onChange={setNewValueHandler}
          onSubmit={changeText}
          onBlur={changeText}
        />
      ) : (
        <div className={styles.itemText} onClick={() => setEditing(true)}>
          {newValue}
        </div>
      )}
    </>
  );
};
