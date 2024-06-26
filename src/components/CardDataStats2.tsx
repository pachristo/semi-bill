import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CardDataStatsProps {
  title: string;
  link: string;
  children: ReactNode;
}

const CardDataStats2: React.FC<CardDataStatsProps> = ({
  title,
  link,
  children,
}) => {
  return (
    <Link
      to={link}
      className=" rounded-lg bg-white transition-all  duration-300  hover:bg-primary/10 dark:bg-boxdark dark:hover:brightness-150"
    >
      <div className="rounded-lg border border-stroke px-4 py-3 shadow-default dark:border-strokedark">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-sm font-bold text-black dark:text-white sm:text-base">
              {title}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardDataStats2;
