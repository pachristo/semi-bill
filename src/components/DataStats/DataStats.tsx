import { IStats } from '../../types/app/components.types';
import AppButton from '../Custom/AppButton';

interface Props {
  data: IStats[];
  gridClasses?: string;
}

const DataStats = ({ data, gridClasses }: Props) => {
  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <ul
        className={`grid ${
          gridClasses ??
          ' grid-cols-1 gap-5 gap-y-20  sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-5 '
        }`}
      >
        {data.map(({ title, value, action }, key) => (
          <li
            key={key}
            className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0"
          >
            <div className="flex flex-col items-center">
              <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
                {value ?? 0}
              </h4>
              <p className="mt-2 text-sm font-medium">{title}</p>
              {!!action && (
                <AppButton
                  onClick={action.onClick}
                  type="button"
                  className="mt-3"
                >
                  {action.title}
                </AppButton>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataStats;
