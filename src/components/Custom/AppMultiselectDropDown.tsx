import Select, { MultiValue } from 'react-select';
import { MultiSelectOptions } from '../../types/app/components.types';

interface Props {
  onChange: (e: MultiValue<MultiSelectOptions>) => void;
  options: MultiSelectOptions[];
  placeholder?: string;
  defaultValues?: MultiSelectOptions[];
}

const AppMultiselectDropDown = ({
  onChange,
  options,
  placeholder,
  defaultValues,
}: Props): JSX.Element => {
  return (
    <Select
      isMulti
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      name="colors"
      isSearchable={false}
      options={options}
      defaultValue={defaultValues}
      className="!bg-black"
      classNames={{
        valueContainer: () => ' dark:bg-boxdark',
        menu: () => ' text-black',
        indicatorsContainer: () => 'dark:bg-primary text-red',
        clearIndicator: () => 'text-red',
        multiValueRemove: () => 'dark:bg-black/70',
        multiValueLabel: () => ' dark:bg-primary dark:text-white ',
        placeholder: () => 'dark:text-white',
      }}
      classNamePrefix="select"
    />
  );
};

export default AppMultiselectDropDown;
