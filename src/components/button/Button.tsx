import { ButtonType } from '../models';
import './Button.css';
interface Props {
  text: string;
  type: ButtonType;
  dataTestId: string;
  onClick?: () => void;
}

export const Button = ({ text, type, dataTestId, onClick }: Props) => {
  return (
    <div className='button-container'>
      <button type={type} data-testid={dataTestId} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
