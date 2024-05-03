interface Props {
  isActive: boolean;
  onToggle: (value: boolean) => void;
  id: string;
}

const SwitcherTwo = ({ isActive, onToggle, id }: Props) => {
  return (
    <div x-data="{ switcherToggle: false }">
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            id={id}
            type="checkbox"
            className="sr-only"
            onChange={() => onToggle(!isActive)}
          />
          <div
            className={`h-5 w-14 rounded-full bg-meta-9 shadow-inner  ${
              isActive ? 'bg-primary/50' : ' bg-[#5A616B]/20 dark:bg-[#5A616B]'
            }`}
          ></div>
          <div
            className={`dot absolute -top-1 left-0 h-7 w-7 rounded-full bg-graydark/80 shadow-switch-1 transition dark:bg-white ${
              isActive &&
              '!right-0 !translate-x-full !bg-primary dark:!bg-primary'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherTwo;
