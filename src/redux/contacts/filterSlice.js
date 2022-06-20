import { useDispatch, useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (_, action) => action.payload.toLowerCase(),
    reset: () => '',
  },
});

const { change, reset } = filterSlice.actions;
const filterReducer = filterSlice.reducer;

const useFilter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = value => dispatch(change(value));
  const handleFilterReset = () => dispatch(reset());

  return { filter, handleFilterChange, handleFilterReset };
};

export { useFilter, filterReducer };
