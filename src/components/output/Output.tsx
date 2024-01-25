interface Props {
  label: string;
  output?: number;
  htmlFor: string;
  dataTestId: string;
  id: string;
}

export const Output = ({ label, output, htmlFor, dataTestId, id }: Props) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <output data-testid={dataTestId} id={id}>
        {output}
      </output>
    </div>
  );
};
