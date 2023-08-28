import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { persistedReducer } from "./reducers";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(
  //   createLogger({
  //     collapsed: (getState, action) => action.type === "ek",
  //     predicate: () => __DEV__
  //   })
  // )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const persistor = persistStore(store);

export { store, persistor };
