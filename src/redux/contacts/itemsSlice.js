import { useDispatch, useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add: {
      reducer: (state, action) => {
        const contact = action.payload;
        const isExisting = state.find(({ name }) => name === contact.name);

        if (isExisting) {
          console.log(contact.name + ' is already in contacts!');
          return state;
        }

        return [contact, ...state];
      },
      prepare: contact => ({ payload: { ...contact, id: nanoid() } }),
    },
    remove: (state, action) => state.filter(i => i.id !== action.payload),
  },
});

const { add, remove } = itemsSlice.actions;
const itemsReducer = itemsSlice.reducer;

const useItems = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleAddContact = value => dispatch(add(value));
  const handleRemoveContact = value => dispatch(remove(value));

  return { contacts, handleAddContact, handleRemoveContact };
};

export { itemsReducer, useItems };
