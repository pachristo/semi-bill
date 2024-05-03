import { PropsWithChildren, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';
import { authStore } from '../stores/auth.store';
import { useNavigationHistoryStore } from '../stores/navigationHistoryStore';
import { appToast } from '../utils/appToast';
import routes from './routes';

interface Props extends PropsWithChildren {
  isSuperAdmin?: boolean;
}
const RequireAuth = ({ isSuperAdmin, children }: Props): JSX.Element => {
  const navigationStore = useNavigationHistoryStore();
  const { loginResponse, checkIfSuperAdmin } = useStore(authStore);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loginResponse?.token) {
      navigationStore.setRedirectedFromPath(location.pathname);
      navigationStore.deleteLastRoute();
    }
  }, [loginResponse?.token]);

  if (isSuperAdmin === true) {
    if (!checkIfSuperAdmin()) {
      appToast.Error('You are not allowed to view this route');
      navigate(-1);
    }

    return <>{children}</>;
    // return !!checkIfSuperAdmin() ? (
    //   <>{children}</>
    // ) : (
    //   <Navigate to={routes.LOGIN_PAGE} replace />
    // );
  } else {
    return loginResponse?.token ? (
      <>{children}</>
    ) : (
      <Navigate to={routes.HOME_PAGE} replace />
    );
  }
};

export default RequireAuth;
