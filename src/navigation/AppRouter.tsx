import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import RegisterPage from '../pages/Authentication/RegisterPage';
import SignIn from '../pages/Authentication/SignIn';
import ECommerce from '../pages/Dashboard/ECommerce';
import ProfilePage from '../pages/Dashboard/Profile/ProfilePage';
import TransactionsPage from '../pages/Dashboard/TransactionsPage';
import ErrorPage from '../pages/ErrorPage';
import RequireAuth from './RequireAuth';
import routes from './routes';
import useEnhancedCustomRouterUtilities from './useEnhancedCustomRouterUtilities';
// import RatesPage from '../pages/Dashboard/SystemConfig/RatesPage';

const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));

const AppRouter = (): JSX.Element => {
  useEnhancedCustomRouterUtilities();

  return (
    <Routes>
      {/* AUTH PAGES START */}
      <Route
        index
        element={
          <>
            <PageTitle title="Login" />
            <SignIn />
          </>
        }
      />
      <Route
        path={routes.LOGIN_PAGE}
        element={
          <>
            <PageTitle title="Login" />
            <SignIn />
          </>
        }
      />
      <Route
        path={routes.REGISTER_PAGE}
        element={
          <>
            <PageTitle title="Register" />
            <RegisterPage />
          </>
        }
      />

      {/* AUTH PAGES END */}

      <Route
        path={routes.DASHBOARD_LAYOUT}
        element={
          <RequireAuth>
            <DefaultLayout />
          </RequireAuth>
        }
      >
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard" />
              <ECommerce />
            </>
          }
        />

        {/* GENERIC PAGES START */}

        <Route
          path={routes.TRANSACTIONS_PAGE}
          element={
            <>
              <PageTitle title="Transactions page" />
              <TransactionsPage />
            </>
          }
        />

        <Route
          path={routes.PROFILE_PAGE}
          element={
            <>
              <PageTitle title="Profile" />
              <ProfilePage />
            </>
          }
        />

        {/* GENERIC PAGES END */}
      </Route>

      <Route
        path="/*"
        element={
          <>
            <PageTitle title="Error" />
            <ErrorPage />
          </>
        }
      />
    </Routes>
  );
};

export default AppRouter;
