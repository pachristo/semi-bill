import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';
import ArrowBack from '../components/SVGs/ArrowBack';
import Illustration from '../images/illustration/illustration-01.svg';
import routes from '../navigation/routes';
import { useNavigationHistoryStore } from '../stores/navigationHistoryStore';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const { history } = useStore(useNavigationHistoryStore);

  const handleNavigation = () => {
    if (history.length > 1) {
      navigate(-1);
    } else {
      window.location.replace(routes.HOME_PAGE);
    }
  };
  return (
    <main className="flex min-h-screen items-center justify-center  dark:bg-boxdark-2 ">
      <div className="rounded-2xl border border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20">
        <div className="mx-auto flex flex-col items-center md:min-w-[50vw]   md:!max-w-[410px]">
          <div>
            <img src={Illustration} alt="illustration" />
          </div>

          <div className="mt-7.5 text-center">
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
              Sorry, the page can’t be found
            </h2>
            <p className="font-medium">
              The page you were looking for appears to have been moved, deleted
              or does not exist.
            </p>
            <button
              onClick={handleNavigation}
              type="button"
              className="mt-7.5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-opacity-90"
            >
              <ArrowBack />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
