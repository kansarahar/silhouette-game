import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserInfoState } from './user-info.reducer';

const selectUserInfo = (state: AppState) => state.userInfo;

export const selectUserInfoData = createSelector(
  selectUserInfo,
  (state: UserInfoState) => state
);
