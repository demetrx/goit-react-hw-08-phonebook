import { useFilter } from 'redux/contacts/filterSlice';
import { Label } from './Filter.styled';

const Filter = () => {
  const { filter, handleFilterChange } = useFilter();

  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
