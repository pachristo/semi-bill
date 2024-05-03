import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DataTableTwo from '../../components/DataTables/DataTableTwo';

const columns = [
  { accessor: 'id', Header: 'Transaction ID' },
  { accessor: 'type', Header: 'Transaction Type' },
  { accessor: 'amount', Header: 'Amount' },
  { accessor: 'channel', Header: 'Channel' },
  { accessor: 'date', Header: 'Date & Time' },
  { accessor: 'status', Header: 'Status' },
];

const TransactionsPage = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Breadcrumb pageName="Transactions" />
      <div className="relative rounded-sm border  border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <DataTableTwo
          columns={columns}
          data={[]}
          isLoading={false}
          pagination={{
            currentPage,
            goToPage: (page) => setCurrentPage(page),
            totalItems: 10,
          }}
        />
      </div>
    </>
  );
};

export default TransactionsPage;
