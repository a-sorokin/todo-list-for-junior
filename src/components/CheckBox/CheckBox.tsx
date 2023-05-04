import { Checkbox as CheckBoxMui } from "@mui/material";
import { FC } from "react";
import styles from "./CheckBox.module.scss";

type TProps = {
  checked: boolean;
  onChange: () => void;
};

export const CheckBox: FC<TProps> = ({ checked, onChange }) => (
  <CheckBoxMui
    className={styles.checkbox}
    checked={checked}
    onChange={onChange}
  />
);
