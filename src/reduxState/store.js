import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currencySlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedCurrencyReducer = persistReducer(
  {
    key: 'baseCurrency',
    storage,
    whitelist: ['baseCurrency'],
  },
  currencyReducer,
);

export const store = configureStore({
  reducer: {
    currency: persistedCurrencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
