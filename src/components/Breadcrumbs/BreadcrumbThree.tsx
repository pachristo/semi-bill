import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BreadCrumbSlash from '../SVGs/BreadCrumbSlash';
import { IBreadCrumb } from '../../types/app/components.types';
import ArrowBack from '../SVGs/ArrowBack';

interface Props {
  data: IBreadCrumb[];
}

const BreadcrumbThree: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-4 flex items-center justify-between gap-6 rounded-md border border-stroke bg-whiter p-4 py-3 dark:border-strokedark dark:bg-meta-4 sm:px-6 sm:py-5.5 xl:px-7.5">
      <button
        onClick={() => navigate(-1)}
        className="app-submit-button  max-w-max !py-2"
      >
        <ArrowBack />
      </button>

      <nav>
        <ol className="flex flex-wrap items-center gap-3">
          {data.map(({ route, title, disabled, shouldGoBack }, index) => (
            <li key={index}>
              {!!shouldGoBack ? (
                <button
                  disabled={disabled || index + 1 === data.length}
                  className="flex items-center gap-3.5 font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  {index !== 0 && <BreadCrumbSlash />}
                  {title}
                </button>
              ) : (
                <Link
                  className="flex items-center gap-3.5 font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  to={disabled || index + 1 === data.length ? '' : route}
                >
                  {index !== 0 && <BreadCrumbSlash />}
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbThree;
