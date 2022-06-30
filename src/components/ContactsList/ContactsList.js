import ContactsItem from 'components/ContactsItem/ContactsItem';
import Loader from 'components/UI/Loader/Loader';
import useContactsList from '../../hooks/useContactsList';

const ContactsList = ({ onEdit }) => {
  const { isLoading, isFetching, error, filteredContacts } = useContactsList();

  if (isLoading) return <p>Wait a second...</p>;
  if (error) return <p>Couldn`t fetch data, retry later.</p>;
  if (filteredContacts.length === 0) return <p>No Contacts found.</p>;

  return (
    <>
      {isFetching && <Loader />}
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            id={id}
            name={name}
            number={number}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
