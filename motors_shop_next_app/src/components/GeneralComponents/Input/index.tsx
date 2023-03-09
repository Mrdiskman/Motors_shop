import { LabelHTMLAttributes } from "react";
import { Label } from "./style";
import { UseFormRegister } from "react-hook-form";

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size: "small" | "big";
  labelFor: string;
  fieldName: string;
  type: string;
  placeholder: string;
  index?: number;
  handleChange?: (index: number, url: string) => void;
  register?: UseFormRegister<any>;
}

const Input = ({
  size,
  labelFor,
  fieldName,
  type,
  placeholder,
  register,
  index,
  handleChange,
  ...rest
}: IProps): JSX.Element => {
  return (
    <Label htmlFor={labelFor} size={size} {...rest}>
      {labelFor}
      <input
        type={type}
        id={fieldName}
        placeholder={placeholder}
        {...register?.(fieldName!)}
      />
    </Label>
  );
};

export default Input;
