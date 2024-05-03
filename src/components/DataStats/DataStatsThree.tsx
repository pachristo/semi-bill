import { IStats } from '../../types/app/components.types';

interface Props {
  title?: string;
  data: IStats[];
}

const DataStatsThree = ({ data, title }: Props): JSX.Element => {
  return (
    <div>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {!!title && (
            <h2 className="text-title-sm2 font-bold text-black dark:text-white">
              {title}
            </h2>
          )}
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {data.map(({ title, value, subtitle }, key) => (
          <li
            key={key}
            className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5"
          >
            <div className="flex items-end justify-between">
              <div>
                <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                  {value}
                </h3>
                <p className="font-medium">{title}</p>
                {!!subtitle && (
                  <span className="text-sm font-medium">{subtitle}</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataStatsThree;
