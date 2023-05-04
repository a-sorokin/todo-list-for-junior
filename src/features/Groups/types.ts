export type TGroupId = string;

export type TGroup = {
  id: TGroupId;
  name: string;
  updatedAt: number;
};

export type TGroups = {
  [key in TGroupId]: TGroup;
};
