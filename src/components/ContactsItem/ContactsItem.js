import { useRemoveContactMutation } from 'services/contacts-api';
import { ItemWrap, Btn } from './ContactsItem.styled';

const ContactsItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isSuccess }] = useRemoveContactMutation();

  return (
    <li key={id}>
      <ItemWrap>
        {name}: {number}
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
