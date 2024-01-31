import { InputType } from '../../models';
import './Input.css';
interface Props {
  label: string;
  htmlFor: string;
  dataTestId: string;
  inputType: InputType.NUMBER | InputType.DATE_TIME;
  id: string;
  value: number | string 
  onChange: (value: string | number) => void;
  min?: string
  step?: string
  required?: boolean
}

export const Input = ({
  label,
  htmlFor,
  dataTestId,
  inputType,
  id,
  value,
  onChange,
  min,
  step,
  required = false
}: Props) => {
  return (
    <div className='input-container'>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        data-testid={dataTestId}
        type={inputType}
        id={id}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}        
        min={min}
        step={step}
        required={required}
      />
    </div>
  );
};
