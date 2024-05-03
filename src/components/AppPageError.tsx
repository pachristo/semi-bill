import { BsArrowLeft } from 'react-icons/bs';
import ErrorFace from './SVGs/ErrorFace';
import { IoReload } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  onRefetch: () => void;
}

const AppPageError = ({ title, onRefetch }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="app-card-page mt-6 flex min-h-[80vh] flex-col items-center justify-center text-2xl md:text-3xl lg:text-4xl">
      <ErrorFace />
      <p className="max-w-3xl px-5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
        {title}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-md border border-primary bg-primary px-2 py-1 text-sm font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary sm:px-4 sm:py-3"
          type="button"
        >
          <BsArrowLeft />
          Go back
        </button>
        <button
          onClick={onRefetch}
          className="flex items-center gap-2 rounded-md border border-success bg-success px-2 py-1 text-sm font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary sm:px-4 sm:py-3"
          type="button"
        >
          <IoReload />
          Reload
        </button>
      </div>
    </div>
  );
};

export default AppPageError;
