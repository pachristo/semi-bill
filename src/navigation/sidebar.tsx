import { BiMoneyWithdraw } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import DashboardIcon from '../components/SVGs/DashboardIcon';
import routes from './routes';

export interface INavLink {
  title?: string;
  route?: string;
  sectionTitle?: string;
  badge1?: string;
  badge2?: string;
  groupTitle?: string;
  groupIcon?: JSX.Element;
  groupCondition?: boolean;
  otherLinks?: INavLink[];
  singleItemCondition?: boolean;
}

export const sidebarLinks = (currentPathname: string): INavLink[] => {
  return [
    {
      title: 'Dashboard',
      route: '',
      groupIcon: <DashboardIcon />,
      singleItemCondition: currentPathname === routes.DASHBOARD_LAYOUT,
    },

    {
      title: 'Transactions',
      route: routes.TRANSACTIONS_PAGE,
      groupIcon: <BiMoneyWithdraw className="text-xl" />,
      singleItemCondition: currentPathname.includes(routes.TRANSACTIONS_PAGE),
    },
    {
      title: 'Profile',
      route: routes.PROFILE_PAGE,
      groupIcon: <CgProfile className="text-xl" />,
      singleItemCondition: currentPathname.includes(routes.PROFILE_PAGE),
    },
  ];
};
