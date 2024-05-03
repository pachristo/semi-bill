import { IStatus, UserStatus } from '../../types/app/components.types';

interface Props {
  status: IStatus | UserStatus;
}

const StatusBadge = ({ status }: Props): JSX.Element => {
  if (status === 'Pending' || status === 'InActive') {
    return (
      <button className="inline-flex rounded-md bg-[#fef4e4]/5 px-2 py-1 text-sm font-medium text-[#f9a928] hover:bg-opacity-90">
        {status}
      </button>
    );
  } else if (status === 'Completed' || status === 'Active') {
    return (
      <button className="inline-flex rounded-md bg-success/5 px-2 py-1 text-sm font-medium text-success hover:bg-opacity-90">
        {status}
      </button>
    );
  } else if (status === 'Processing') {
    return (
      <button className="inline-flex rounded-md bg-primary/5 px-2 py-1 text-sm font-medium text-primary hover:bg-opacity-90">
        Processing
      </button>
    );
  } else
    return (
      <button className="inline-flex rounded-md bg-red/5 px-2 py-1 text-sm font-medium text-red hover:bg-opacity-90">
        {status}
      </button>
    );
};

export default StatusBadge;
