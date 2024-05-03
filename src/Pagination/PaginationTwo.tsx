import { Fragment } from 'react';
import LeftPagination from '../components/SVGs/LeftPagination';
import RightPagination from '../components/SVGs/RightPagination';
import { PaginationProps } from '../types/app/components.types';

const DEFAULT_API_DATA_SIZE = 50;

const PaginationTwo = (props: PaginationProps): JSX.Element => {
  const {
    currentPage,
    itemsPerPage = DEFAULT_API_DATA_SIZE,
    totalItems,
    goToPage,
    isLoading,
  } = props;

  const getTotalPages = () => {
    const totalPages = totalItems / itemsPerPage;
    return Math.ceil(totalPages);
  };

  const hideSecondaryPages = (page: number) => {
    return (
      page === currentPage - 2 ||
      page === currentPage - 1 ||
      page === currentPage + 1 ||
      page === currentPage + 2
    );
  };

  const modifiedPages = () => {
    const numbers = [
      1,
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      getTotalPages(),
    ];

    const nums: number[] = [];

    numbers.forEach((num) => {
      if (num > 0 && num <= getTotalPages()) nums.push(num);
    });

    const uniqueNumbers = [...new Set(nums)];
    return uniqueNumbers;
  };

  const showLeftElipses = () => currentPage > 4;
  const showRightElipse = () => getTotalPages() - currentPage > 4;

  return (
    <nav className="flex w-full justify-end border-t border-stroke px-8 pt-5 dark:border-stroke/50">
      <ul className="flex flex-wrap items-center">
        <li>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1 || isLoading}
            className="flex h-8 w-8 items-center justify-center rounded-l-md border border-stroke hover:border-primary hover:bg-gray hover:text-primary disabled:cursor-not-allowed dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark"
            type="button"
          >
            <LeftPagination />
          </button>
        </li>
        {modifiedPages().map((page, index) => (
          <Fragment key={index}>
            {showLeftElipses() && index === 1 && (
              <li className="hidden  px-2  text-xs font-black tracking-widest text-black dark:text-white/90 sm:block sm:text-sm  ">
                ...
              </li>
            )}

            <li className={`${hideSecondaryPages(page) && 'hidden md:block'}`}>
              <button
                disabled={isLoading}
                onClick={() => goToPage(page)}
                className={`flex items-center justify-center border px-4 py-[5px] font-medium hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark
                ${
                  page === currentPage
                    ? 'border-primary  bg-gray text-primary  dark:border-primary dark:bg-graydark'
                    : ' border-stroke   '
                }
                `}
                type="button"
              >
                {page}
              </button>
            </li>
            {showRightElipse() && index === modifiedPages().length - 2 && (
              <li className="hidden px-2 text-xs font-black  tracking-widest text-black dark:text-white/90 sm:block sm:text-sm  ">
                ...
              </li>
            )}
          </Fragment>
        ))}

        <li>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= getTotalPages() || isLoading}
            className="flex h-8 w-8 items-center justify-center rounded-r-md border border-stroke border-l-transparent hover:border-primary hover:bg-gray hover:text-primary disabled:cursor-not-allowed dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark"
            type="button"
          >
            <RightPagination />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationTwo;
