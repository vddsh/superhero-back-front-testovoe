import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  text: string;
  btnColour: string;
}

export const Button: React.FC<ButtonProps> = props => {
  const {btnColour,text, children, ...rest} = props;

  return (
    <div className='px-2'>
      <button className={`bg-transparent hover:bg-${btnColour}-500 text-${btnColour}-700 hover:text-white py-2 px-4 border border-${btnColour}-500 hover:border-transparent rounded`} {...rest}>{text}</button>
    </div>
  );
};

export default Button;
