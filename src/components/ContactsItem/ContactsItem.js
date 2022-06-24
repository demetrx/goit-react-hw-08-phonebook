import { useRemoveContactMutation } from 'redux/contactsSlice';
import { ItemWrap, Btn } from './ContactsItem.styled';

const ContactsItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading, isSuccess }] = useRemoveContactMutation();

  return (
    <li key={id}>
      <ItemWrap>
        {name}: {phone}
        <Btn
          type="button"
          disabled={isLoading || isSuccess}
          onClick={() => deleteContact(id)}
        >
          {isLoading || isSuccess ? 'Deleting' : 'Delete'}
        </Btn>
      </ItemWrap>
    </li>
  );
};

export default ContactsItem;
