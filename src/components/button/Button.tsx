interface Props {
  text: string;
  onClick(): unknown;
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};
