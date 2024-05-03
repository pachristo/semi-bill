// import { createElement } from 'react';
// import DashboardIcon from '../components/SVGs/DashboardIcon';

// export interface INavLink {
//   title?: string;
//   route?: string;
//   sectionTitle?: string;
//   badge1?: string;
//   badge2?: string;
//   groupTitle?: string;
//   groupIcon?: JSX.Element;
//   groupCondition?: boolean;
//   otherLinks?: INavLink[];
//   singleItemCondition?: boolean;
// }

// export const sidebarLinks = (currentPathname: string): INavLink[] => {
//   return [
//     // GROUP OF ITEMS EXAMPLE START
//     {
//       groupTitle: 'Dashboard',
//       sectionTitle: 'MENU',
//       groupIcon: createElement(DashboardIcon),
//       groupCondition:
//         currentPathname === '/' || currentPathname.includes('dashboard'),
//       otherLinks: [
//         {
//           title: 'ecommerce',
//           route: 'adfasdfas',
//           badge1: 'Pro',
//         },
//         {
//           title: 'Analytics',
//           route: 'asfasf',
//           badge1: 'Pro',
//         },
//       ],
//     },
//     // GROUP OF ITEMS EXAMPLE END

//     // SINGLE ITEM EXAMPLE START
//     {
//       title: 'Calendar',
//       route: '',
//       groupIcon: createElement(DashboardIcon),
//       singleItemCondition: currentPathname.includes('calendar'),
//     },
//     // SINGLE ITEM EXAMPLE END

//     // SINGLE ITEM WITH SECTION TITLE EXAMPLE START
//     {
//       title: 'Messages',
//       route: '',
//       sectionTitle: 'Support',
//       groupIcon: createElement(DashboardIcon),
//       badge1: '5',
//       badge2: 'Pro',
//       singleItemCondition: currentPathname.includes('messages'),
//     },
//     // SINGLE ITEM WITH SECTION TITLE EXAMPLE END
//   ];
// };

export default '';
