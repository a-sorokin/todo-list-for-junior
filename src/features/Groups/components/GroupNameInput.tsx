import { Input } from "components/Input/Input";
import { FC, useCallback, useState } from "react";
import { useGroupsStore } from "features/Groups/groupsStore";

type TProps = {
  afterCreate: () => void;
};

export const GroupNameInput: FC<TProps> = ({ afterCreate }) => {
  const { addGroup } = useGroupsStore();
  const [groupName, setGroupName] = useState("");

  const submitHandler = useCallback(() => {
    if (!groupName) return afterCreate();
    addGroup(groupName);
    setGroupName("");
    afterCreate();
  }, [addGroup, afterCreate, groupName]);

  return (
    <Input
      label={"Set group name"}
      value={groupName}
      onChange={(value) => setGroupName(value)}
      onSubmit={submitHandler}
      onBlur={submitHandler}
    />
  );
};
