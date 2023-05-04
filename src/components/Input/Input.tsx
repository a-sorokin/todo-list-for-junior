import TextField from "@mui/material/TextField";
import styles from "./Input.module.scss";
import { FC } from "react";

type TProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  className?: string;
  onBlur?: (value: string) => void;
};

export const Input: FC<TProps> = ({
  label,
  value,
  onChange,
  onSubmit,
  className,
  onBlur,
}) => (
  <TextField
    autoFocus
    label={label}
    value={value}
    className={`${styles.input} ${className}`}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={(e) => {
      if (e.key !== "Enter") return;
      onSubmit((e.target as HTMLInputElement).value);
    }}
    onBlur={(e) => {
      if (!onBlur) return;
      onBlur((e.target as HTMLInputElement).value);
    }}
  />
);
