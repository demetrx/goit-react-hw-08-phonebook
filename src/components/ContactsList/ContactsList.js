import ContactsItem from 'components/ContactsItem/ContactsItem';
import Loader from 'components/UI/Loader/Loader';
import useContactsList from './useContactsList';

const ContactsList = () => {
  const { isLoading, isFetching, error, filteredContacts } = useContactsList();

  if (isLoading) return <p>Wait a second...</p>;
  if (error) return <p>Couldn`t fetch data, retry later.</p>;

  return (
    <>
      {isFetching && <Loader />}
      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactsItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
