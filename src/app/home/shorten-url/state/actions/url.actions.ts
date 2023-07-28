import { createAction, props } from '@ngrx/store';
import { Url } from '../entity/url.entity';

export const GENERATE_URL = '[GENERATE_URL] Url';
export const GENERATE_URL_SUCCESS = '[GENERATE_URL] Url Success';
export const GENERATE_URL_FAILURE = '[GENERATE_URL] Url Failure';

export const generateUrl = createAction(
  GENERATE_URL,
  props<{ url: Url }>()
);

export const generateUrlSuccess = createAction(
  GENERATE_URL_SUCCESS,
  props<any>()
)

export const generateUrlFailure = createAction(
  GENERATE_URL_FAILURE,
  props<{ message: string }>()
)
