import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from 'zustand';
import { authStore } from '../stores/auth.store';
import { useNavigationHistoryStore } from '../stores/navigationHistoryStore';
import routes from './routes';

interface Props extends PropsWithChildren {
  isSuperAdmin?: boolean;
}
const RequireAuth = ({ isSuperAdmin, children }: Props): JSX.Element => {
  const navigationStore = useNavigationHistoryStore();
  const { loginResponse } = useStore(authStore);

  useEffect(() => {
    if (!loginResponse?.token) {
      navigationStore.setRedirectedFromPath(location.pathname);
      navigationStore.deleteLastRoute();
    }
  }, [loginResponse?.token]);

  if (isSuperAdmin === true) {
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
