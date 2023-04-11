import { createAction, props } from '@ngrx/store';

export const setUserName = createAction(
  '[User] Set UserName',
  props<{ name: string }>()
);

export const setUserRoom = createAction(
  '[User] Set UserRoom',
  props<{ room: string }>()
)

export const setUserHostStatus = createAction(
  '[User] Set UserHostStatus',
  props<{ host: boolean }>()
)