import { DetailedHTMLProps } from 'react';

interface Props
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  bg?: string;
  className?: string;
}

const AppButton = (props: Props): JSX.Element => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center  gap-x-2 rounded-md transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
        props.bg ?? 'bg-primary'
      } ${
        props.className
      }  px-3 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-5`}
    />
  );
};

export default AppButton;
