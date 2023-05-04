import { useCallback, useState } from "react";
import { Input } from "components/Input/Input";
import styles from "features/Items/components/NewItem/NewItem.module.scss";
import { SortButton } from "features/Items/components/SortButton/SortButton";
import { useItemsStore } from "features/Items/itemsStore";

export const NewItem = () => {
  const { addItem } = useItemsStore();
  const [textValue, setTextValue] = useState("");

  const changeHandler = useCallback((newValue: string) => {
    setTextValue(newValue);
  }, []);

  const submitHandler = useCallback(() => {
    addItem(textValue);
    setTextValue("");
  }, [addItem, textValue]);

  return (
    <div className={styles.newItem}>
      <Input
        label="New Item"
        value={textValue}
        onChange={changeHandler}
        onSubmit={submitHandler}
      />
      <button onClick={submitHandler}>Add</button>
      <SortButton />
    </div>
  );
};
