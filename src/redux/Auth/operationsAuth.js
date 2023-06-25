import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const userRegister = createAsyncThunk(
  'auth/register',
  async (registerData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', registerData);
      setToken(data.token);
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
export const userLogIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const userLogOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      axios.post('/users/logout');
      clearToken();
      return;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const userRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const getToken = state.auth.token;
    if (getToken === null) {
      return rejectWithValue('User is not logged in');
    }
    try {
      setToken(getToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
