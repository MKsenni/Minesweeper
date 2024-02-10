'use client';
import { configureStore } from '@reduxjs/toolkit';
import playGameReducer from './slices/playGameSlice';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    playGame: playGameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
