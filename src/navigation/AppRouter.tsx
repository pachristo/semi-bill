import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import RegisterPage from '../pages/Authentication/RegisterPage';
import SignIn from '../pages/Authentication/SignIn';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import ProfilePage from '../pages/Dashboard/Profile/ProfilePage';
import TransactionsPage from '../pages/Dashboard/TransactionsPage';
import ErrorPage from '../pages/ErrorPage';
import RequireAuth from './RequireAuth';
import routes from './routes';
import useEnhancedCustomRouterUtilities from './useEnhancedCustomRouterUtilities';
import BuyAirtimePage from '../pages/Dashboard/BuyAirtimePage';
import BuyDataPage from '../pages/Dashboard/BuyDataPage';
import PayCablePage from '../pages/Dashboard/PayCablePage';
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
              <DashboardPage />
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
        <Route
          path={routes.BUY_AIRTIME_PAGE}
          element={
            <>
              <PageTitle title="Buy Airtime" />
              <BuyAirtimePage />
            </>
          }
        />

        <Route
          path={routes.BUY_DATA_PAGE}
          element={
            <>
              <PageTitle title="Buy Data" />
              <BuyDataPage />
            </>
          }
        />

        <Route
          path={routes.PAY_CABLE_TV_PAGE}
          element={
            <>
              <PageTitle title="Pay cable tv" />
              <PayCablePage />
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
