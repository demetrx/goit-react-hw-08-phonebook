import { ItemWrap } from './ContactsList.styled';
import { useItems } from 'redux/contacts/itemsSlice';
import { useFilter } from 'redux/contacts/filterSlice';

const ContactsList = () => {
  const { contacts, handleRemoveContact } = useItems();
  const { filter } = useFilter();

  const contactsToShow = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {contactsToShow.map(({ id, name, number }) => (
        <li key={id}>
          <ItemWrap>
            {name}: {number}
            <button type="button" onClick={() => handleRemoveContact(id)}>
              Delete
            </button>
          </ItemWrap>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
