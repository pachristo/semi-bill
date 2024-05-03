import { Fragment, useEffect, useRef, useState } from 'react';
import { TbDotsVertical } from 'react-icons/tb';
import { DropdownOneProps } from '../../types/app/components.types';

interface Props {
  data: DropdownOneProps[];
}

const DropdownsOne: React.FC<Props> = ({ data }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative  inline-block">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        type="button"
        className="inline-flex  items-center gap-2.5 rounded-md bg-transparent p-1.5 text-xl font-medium text-black  transition-all hover:bg-primary hover:bg-opacity-95 hover:text-white dark:text-white"
      >
        <TbDotsVertical />
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute left-0 top-full z-40 mt-2 w-max rounded-md border border-stroke bg-white py-3 shadow-card dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col">
          {data.map((props, index) => (
            <Fragment key={index}>
              {!!props && (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {
                      setDropdownOpen(false);
                      props?.onClick?.();
                    }}
                    className="flex w-full px-5 py-2 font-medium hover:bg-whiter hover:text-primary dark:hover:bg-meta-4"
                  >
                    {props?.title}
                  </button>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownsOne;
