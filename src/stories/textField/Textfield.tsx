import './textfield.scss';

export interface ButtonProps {
  placeholder?: string;
  label?: string;
  handleChange?: (event:any) => void;
}

export const Textfield = ({
  placeholder = "Enter your name",
  label='Name',
  handleChange,
  ...props

}: ButtonProps) => {
  const onChange = (event:any) => {
    handleChange && handleChange(event)
  }
  return (
    <div>
      <label>{label}: </label>
       <input type='text' placeholder={placeholder}  onChange={onChange}/>
    </div>
  );
};

export default Textfield;
