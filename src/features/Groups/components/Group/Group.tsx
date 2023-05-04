import styles from "./Group.module.scss";
import { FC, useState } from "react";
import { TGroupId } from "features/Groups/types";
import { useGroupsStore } from "features/Groups/groupsStore";
import { GroupName } from "features/Groups/components/GroupName";
import { changeIcon } from "assets/changeIcon";
import { deleteIcon } from "assets/deleteIcon";

type TProps = { id: TGroupId };

export const Group: FC<TProps> = ({ id }) => {
  const { selectedGroupId, setSelectedGroupId, deleteGroup } = useGroupsStore();
  const [nameUpdating, setNameUpdating] = useState(false);

  const isSelected = selectedGroupId === id;

  return (
    <div
      className={`${styles.group} ${isSelected ? styles.selected : ""}`}
      onClick={() => setSelectedGroupId(id)}
    >
      <GroupName
        id={id}
        nameUpdating={nameUpdating}
        onSubmit={() => setNameUpdating(false)}
      />

      <div className={styles.buttons}>
        <button disabled={nameUpdating} onClick={() => setNameUpdating(true)}>
          {changeIcon}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteGroup(id);
          }}
        >
          {deleteIcon}
        </button>
      </div>
    </div>
  );
};
