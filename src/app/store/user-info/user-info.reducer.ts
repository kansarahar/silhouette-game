import { createReducer, on } from '@ngrx/store';
import {
  setUserName,
  setUserRoom,
  setUserHostStatus,
} from './user-info.actions';

export interface UserInfoState {
  name: string;
  room: string;
  host: boolean;
  created: boolean;
  joinedRoom: boolean;
}
export const initalState: UserInfoState = {
  name: '',
  room: '',
  host: false,
  created: false,
  joinedRoom: false
}

export const userInfoReducer = createReducer(
  initalState,
  on(setUserName, (state, { name }) => ({
    ...state,
    name,
    created: true
  })),
  on(setUserRoom, (state, { room }) => ({
    ...state,
    room,
    joinedRoom: true
  })),
  on(setUserHostStatus, (state, { host }) => ({
    ...state,
    host
  })),
)