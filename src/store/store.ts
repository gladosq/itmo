import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {newsApi} from '@/src/api/news';
import newsSlice from '@/src/store/newsSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  newsData: newsSlice,
  [newsApi.reducerPath]: newsApi.reducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {serializableCheck: false}
    ).concat(
      newsApi.middleware,
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
