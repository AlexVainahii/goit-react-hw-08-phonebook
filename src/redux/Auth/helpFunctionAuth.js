import { isAnyOf } from '@reduxjs/toolkit';
export const onPending = state => {
  state.isRefreshing = true;
};

export const onRejected = state => {
  state.isRefreshing = false;
};

export const onFulfilledRegisterLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
export const onFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
export const onFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
