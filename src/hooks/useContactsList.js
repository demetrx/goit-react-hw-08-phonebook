import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useGetContactsQuery } from 'services/contacts-api';

const useContactsList = () => {
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = useMemo(() => {
    const emptyArray = [];
    return createSelector(
      [res => res.data, (_, filter) => filter],
      (contacts, filter) =>
        contacts?.filter(({ name }) => name.toLowerCase().includes(filter)) ??
        emptyArray
    );
  }, []);

  const { filteredContacts, isLoading, isFetching, error } =
    useGetContactsQuery(undefined, {
      selectFromResult: result => ({
        ...result,
        filteredContacts: getVisibleContacts(result, filter),
      }),
    });

  return { isLoading, isFetching, error, filteredContacts };
};

export default useContactsList;
