import styles from "./SortButton.module.scss";
import { useItemsStore } from "features/Items/itemsStore";
import { SORT_RULES_VIEW_STATE } from "features/Items/constant";

export const SortButton = () => {
  const { sortRule, changeSortRule } = useItemsStore();

  const changeSortRuleOnClick = () => {
    changeSortRule(SORT_RULES_VIEW_STATE[sortRule]);
  };

  return (
    <button className={styles.button} onClick={changeSortRuleOnClick}>
      Sort by {sortRule}
    </button>
  );
};
