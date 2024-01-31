import './Output.css'
interface Props {
  label: string;
  htmlFor: string;
  dataTestId: string;
  id: string;
  output?: string;
}

export const Output = ({ label, htmlFor, dataTestId, id, output }: Props) => {
  return (
    <div className="output-container">
      <label htmlFor={htmlFor}>{label} </label>
      <output className='fee' data-testid={dataTestId} id={id}>
        {output}
      </output>
    </div>
  );
};
