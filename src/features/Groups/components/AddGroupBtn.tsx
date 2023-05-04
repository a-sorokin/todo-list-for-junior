import { FC } from "react";

type TProps = {
  onCLick: () => void;
};

export const AddGroupBtn: FC<TProps> = ({ onCLick }) => (
  <button onClick={onCLick}>Add Group</button>
);
