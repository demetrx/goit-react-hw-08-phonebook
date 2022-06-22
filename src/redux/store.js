import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';
import { itemsReducer } from './contacts/itemsSlice';
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

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const alertMd = store => next => action => {
  if (action.meta?.add) {
    const contact = action.payload;
    const items = store.getState().contacts.items;

    const isExisting = items.find(({ name }) => name === contact.name);

    if (isExisting) {
      alert(contact.name + ' is already in contacts!');
      return;
    }
  }

  next(action);
};

const rootReducer = combineReducers({ contacts: contactsReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    alertMd,
  ],
});

const persistor = persistStore(store);

export { store, persistor };
