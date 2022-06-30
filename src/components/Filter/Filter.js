import { useFilter } from 'redux/filterSlice';
import { Label, FilterInput } from './Filter.styled';

const Filter = () => {
  const { filter, handleFilterChange } = useFilter();

  return (
    <div>
      <Label htmlFor="filter">Find a contact by name:</Label>
      <FilterInput
        type="text"
        id="filter"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
