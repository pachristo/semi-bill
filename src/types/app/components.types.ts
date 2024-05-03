export interface IStats {
  title: string;
  value: string;
  subtitle?: string;
  action?: StatsAction;
}

interface StatsAction {
  title: string;
  onClick: () => void;
}

export interface ITab {
  tabTitle: string;
  tabContent: JSX.Element;
}

export interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  currentPage: number;
  goToPage: (value: number) => void;
  isLoading?: boolean;
}

export interface TableColums<T> {
  Header: string;
  accessor: T;
}

export interface DropdownOneProps {
  title: string;
  onClick: () => void;
}

export interface IBreadCrumb {
  title: string;
  route: string;
  disabled?: boolean;
  shouldGoBack?: boolean;
}

export type IStatus = 'Pending' | 'Completed' | 'Declined' | 'Processing';
export type UserReferralStatus = 'Pending' | 'Completed' | 'Processing';

export type UserStatus = 'Active' | 'InActive' | 'Suspended';

export interface MultiSelectOptions {
  value: string;
  label: string;
}

export interface ImageDetails {
  file: File;
  imageURL: string;
}
