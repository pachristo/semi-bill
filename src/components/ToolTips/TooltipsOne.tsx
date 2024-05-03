import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  description: string;
  isSecondary?: boolean;
  onClick?: () => void;
}
const TooltipsOne: React.FC<Props> = ({
  description,
  children,
  isSecondary,
  onClick,
}) => {
  return (
    <div className="group relative inline-block">
      <button
        onClick={onClick}
        className={`inline-flex rounded-md  px-4.5 py-2 font-medium text-white ${
          isSecondary ? 'bg-secondary' : 'bg-primary'
        }`}
      >
        {children}
      </button>
      <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black px-4.5 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
        <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
        {description}
      </div>
    </div>
  );
};

export default TooltipsOne;
