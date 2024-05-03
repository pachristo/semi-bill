import PaginationTwo from '../../Pagination/PaginationTwo';
import { PaginationProps, TableColums } from '../../types/app/components.types';
import { TableBodySkeleton } from '../Custom/TableBodySkeleton';
import ErrorFace from '../SVGs/ErrorFace';

interface Props {
  data: readonly object[];
  columns: TableColums<any>[];
  pagination: PaginationProps | null;
  isLoading?: boolean;
  headerActionElement?: JSX.Element;
  hideSearch?: boolean;
  showTopSearch?: boolean;
  onRefetch?: () => void;
}

const DataTableTwo = ({
  data,
  columns,
  pagination,
  isLoading,
  headerActionElement,
  hideSearch,
  showTopSearch,
  onRefetch,
}: Props) => {
  return (
    <>
      <div className="app-table-two-header w-full">
        {!!showTopSearch && (
          <div className="mr-auto flex w-full min-w-22 max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-5 pl-5 sm:justify-start md:flex-nowrap">
            <input
              type="text"
              className="w-full rounded-md border border-stroke px-5 py-2.5 text-black-2 outline-none focus:border-primary"
              placeholder="Search..."
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-5"
            >
              Search
            </button>
          </div>
        )}

        {!!headerActionElement ? (
          headerActionElement
        ) : (
          <>
            {!hideSearch && (
              <div className="flex w-full min-w-22 max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-5 sm:justify-start md:flex-nowrap">
                <input
                  type="text"
                  className="w-full rounded-md border border-stroke px-5 py-2.5 outline-none focus:border-primary"
                  placeholder="Search..."
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-5"
                >
                  Search
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <section className="data-table-common data-table-two app-table--two-container overflow-x-auto  ">
        <table className="datatable-table app-table-two-div">
          <thead className="border-b py-4">
            <tr>
              {columns.map((column, key) => (
                <th className=" p-5" key={key}>
                  <div className="flex items-center">
                    <span className="text-sm !font-bold dark:text-white sm:text-base">
                      {column.Header}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {isLoading ? (
            <tbody>
              <TableBodySkeleton columnsLength={columns.length} />
            </tbody>
          ) : data.length < 1 ? (
            <tbody>
              <tr>
                <td className="py-10 " colSpan={columns.length}>
                  <div className="flex flex-col items-center justify-center gap-y-5">
                    <ErrorFace className="text-xl md:text-2xl lg:text-3xl" />
                    <p className="text-center text-base font-semibold md:text-lg lg:text-xl">
                      No results.
                    </p>

                    <button
                      type="button"
                      onClick={onRefetch}
                      className="app-submit-button max-w-[15rem]"
                    >
                      Refetch
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data.map((_, firstIndex) => {
                return (
                  <tr key={firstIndex}>
                    {columns.map((column, secondIndex) => (
                      <td key={secondIndex}>
                        {data[firstIndex][column.accessor]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </section>
      {!!pagination && <PaginationTwo {...pagination} isLoading={isLoading} />}
    </>
  );
};

export default DataTableTwo;
