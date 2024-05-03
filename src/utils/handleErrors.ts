import { ApiResponse } from 'apisauce';
import { GenericAPIResponse } from '../types/api/index.types';
import { appToast } from './appToast';

interface IError {
  [x: string]: string[];
}

export const handleApiErrors = (props: any, falbackMessage?: string) => {
  const message =
    getFirstErorr(props?.data?.errors) ??
    props.data?.errors?.[0] ??
    props.data?.error?.message ??
    props.data?.message ??
    falbackMessage ??
    props.problem ??
    'FATAL: Invalid error received.';

  appToast.Error(message);
};

const getFirstErorr = (error: IError) => {
  if (error) {
    const values = Object.entries(error).map(([_, value]) => value);
    if (!!values?.[0]?.[0]) return values?.[0]?.[0];
    else return undefined;
  }
};

export const isValidResponse = (data: ApiResponse<GenericAPIResponse>) =>
  data.ok && !!data?.data?.status;
