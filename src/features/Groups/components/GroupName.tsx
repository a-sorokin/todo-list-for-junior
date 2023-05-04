import { Input } from "components/Input/Input";
import { TGroupId } from "features/Groups/types";
import { FC, useCallback, useMemo, useState } from "react";
import { useGroupsStore } from "features/Groups/groupsStore";

type TProps = {
  id: TGroupId;
  nameUpdating: boolean;
  onSubmit: () => void;
};

export const GroupName: FC<TProps> = ({ id, nameUpdating, onSubmit }) => {
  const { getGroup, updateGroupName } = useGroupsStore();
  const { name } = useMemo(() => getGroup(id), [getGroup, id]);
  const [groupName, setGroupName] = useState(name);

  const changeName = useCallback(
    (newName: string) => setGroupName(newName),
    []
  );

  const updateName = useCallback(() => {
    if (!groupName) return;
    onSubmit();
    updateGroupName(id, groupName);
  }, [groupName, id, onSubmit, updateGroupName]);

  return (
    <div>
      {nameUpdating ? (
        <Input
          label="New group name"
          value={groupName}
          onChange={changeName}
          onSubmit={updateName}
          onBlur={updateName}
        />
      ) : (
        groupName
      )}
    </div>
  );
};
