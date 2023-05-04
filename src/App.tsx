import { Layout } from "layout/Layout";
import { ItemsList, NewItem } from "features/Items";
import { Groups } from "features/Groups";
import { useGroupsStore } from "features/Groups/groupsStore";
import { useItemsStore } from "features/Items/itemsStore";
import { FC, useEffect } from "react";
import { TGroupId } from "features/Groups/types";

const Top: FC<{ groupId: TGroupId | null }> = ({ groupId }) => {
  if (!groupId) return null;
  return <NewItem />;
};

export const App = () => {
  const { selectedGroupId } = useGroupsStore();
  const { setGroupId, refreshItems } = useItemsStore();

  useEffect(() => {
    setGroupId(selectedGroupId as TGroupId);
    refreshItems();
  }, [refreshItems, selectedGroupId, setGroupId]);

  return (
    <div className="App">
      <Layout top={<Top groupId={selectedGroupId} />} leftBar={<Groups />}>
        <ItemsList />
      </Layout>
    </div>
  );
};
