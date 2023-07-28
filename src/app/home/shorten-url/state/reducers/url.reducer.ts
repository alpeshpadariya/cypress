import { Action, createReducer, on } from '@ngrx/store';
import { Url } from '../entity';
import * as urlActions from '../actions';
import * as storage from '../state/storage';

export interface State {
  url?: Url;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  url: storage.getItem('url').url,
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const urlReducer = createReducer(
  initialState,
  on(urlActions.generateUrl, (state, { url }) => ({ url, isLoading: true })),
  on(urlActions.generateUrlSuccess, (state, result) => ({ url: result.url, result, isLoading: false, isLoadingSuccess: true }))
);

export function reducer(state: State | undefined, action: Action): any {
  return urlReducer(state, action);
}

export const urlState = (state: State) => {
  return {
    url: state.url,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};
