import { InputType } from '../../models';
interface Props {
  label: string;
  htmlFor: string;
  dataTestId: string;
  inputType: InputType.NUMBER | InputType.DATE_TIME;
  id: string;
  value: number | string 
  onChange: (value: string | number) => void;
  min?: string
}

export const Input = ({
  label,
  htmlFor,
  dataTestId,
  inputType,
  id,
  value,
  onChange,
  min
}: Props) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        data-testid={dataTestId}
        type={inputType}
        id={id}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        value={value}
        min={min}
      />
    </div>
  );
};
