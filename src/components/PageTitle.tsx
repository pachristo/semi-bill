import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APP_NAME_AND_SLUG } from '../config';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title + ' | ' + APP_NAME_AND_SLUG;
  }, [location, title]);

  return null; // This component doesn't render anything
};

export default PageTitle;
