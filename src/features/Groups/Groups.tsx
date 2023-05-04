import styles from "./Groups.module.scss";
import { useCallback, useState } from "react";
import { AddGroupBtn } from "features/Groups/components/AddGroupBtn";
import { GroupNameInput } from "features/Groups/components/GroupNameInput";
import { Group } from "features/Groups/components/Group/Group";
import { useGroupsStore } from "features/Groups/groupsStore";

export const Groups = () => {
  const { groups } = useGroupsStore();
  const [groupCreating, setGroupCreating] = useState(false);

  const groupCreatingHandler = useCallback(() => {
    setGroupCreating((groupCreating) => !groupCreating);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.groups}>
        <AddGroupBtn onCLick={groupCreatingHandler} />

        {groupCreating && <GroupNameInput afterCreate={groupCreatingHandler} />}

        <div className={styles.groupList}>
          {groups &&
            Object.values(groups)
              .sort((g1, g2) => g2.updatedAt - g1.updatedAt)
              .map(({ id }) => <Group key={`group-${id}`} id={id} />)}
        </div>
      </div>
    </div>
  );
};
