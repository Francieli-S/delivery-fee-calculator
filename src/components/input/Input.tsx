import { InputType } from '../../models';
interface Props {
  label: string;
  htmlFor: string;
  dataTestId: string;
  inputType: InputType.NUMBER | InputType.DATE_TIME;
  id: string;
  labelDetail: string;
}

export const Input = ({
  label,
  htmlFor,
  dataTestId,
  inputType,
  id,
  labelDetail,
}: Props) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input data-testid={dataTestId} type={inputType} id={id} />
      <span>{labelDetail}</span>
    </div>
  );
};
