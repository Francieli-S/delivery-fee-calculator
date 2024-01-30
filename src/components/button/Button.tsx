import { ButtonType } from "../../models";

interface Props {
  text: string;
  type: ButtonType
  dataTestId: string
  onClick?: () => void;
}

export const Button = ({ text, type, dataTestId, onClick }: Props) => {
  return (
    <div>
      <button type={type} data-testid={dataTestId} onClick={onClick}>{text}</button>
    </div>
  );
};
