import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../navigation/routes';
import AppButton from './Custom/AppButton';

const details = [
  {
    title: 'Data purchase',
    amount: '#53,000',
    date: '23 Nov, 2023 . 04:15pm',
  },
  {
    title: 'Data purchase',
    amount: '#53,000',
    date: '23 Nov, 2023 . 04:15pm',
  },
  {
    title: 'Data purchase',
    amount: '#53,000',
    date: '23 Nov, 2023 . 04:15pm',
  },
];

const LeadsReport: React.FC = () => {
  // const { data, isPending, isRefetching } = useQuery({
  //   queryKey: [getUsersQueryKey.all],
  //   queryFn: async () => {
  //     const response = await getAllUsersByStatus({
  //       page: 1,
  //       status: configApi.STATIC_ALL_VALUE,
  //     });
  //     if (response.ok) {
  //       return response.data?.data;
  //     } else {
  //       handleApiErrors(response);
  //       return null;
  //     }
  //   },
  // });

  const isPending = false;
  const isRefetching = false;

  return (
    <div className="col-span-12">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 md:p-6 xl:p-7.5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                Recent Transactions
              </h2>
            </div>
            <Link to={routes.TRANSACTIONS_PAGE}>
              <AppButton>View more</AppButton>
            </Link>
          </div>
        </div>

        <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
          {/* <div className="flex items-center gap-3">
            <div className="flex-1">
              <span className="font-medium">Name</span>
            </div>
            <div className="flex-1">
              <span className="font-medium">Email</span>
            </div>
            <div className="hidden flex-1 md:block">
              <span className="font-medium">Project</span>
            </div>

            <div className="flex-1 ">
              <span className="font-medium">Status</span>
            </div>
          </div> */}
        </div>
        {isPending || isRefetching ? (
          <div className="flex w-full items-center justify-between  py-24">
            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
          </div>
        ) : (
          <div className="p-4 md:p-6 xl:p-7.5">
            <div className="flex flex-col gap-7">
              {details.map((detail, key) => (
                <div className="flex items-center gap-3 text-black" key={key}>
                  <div className="flex-1 ">
                    <div className="flex items-center">
                      <span className=" flex aspect-square h-full items-center justify-center rounded-full bg-red/50 p-2">
                        icon
                      </span>

                      <dl className=" ml-2">
                        <dt className="text-sm font-semibold sm:text-base">
                          {detail.title}
                        </dt>
                        <dd className="text-sm">{detail.date}</dd>
                      </dl>
                    </div>
                  </div>
                  <data
                    className="text-base font-bold sm:text-lg"
                    value={detail?.amount}
                  >
                    {detail?.amount}
                  </data>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadsReport;
