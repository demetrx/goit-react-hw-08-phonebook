import toast from 'react-hot-toast';
import { useFilter } from 'redux/filterSlice';
import useCustomForm from 'hooks/useCustomForm';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/contacts-api';

const ContactsForm = () => {
  const { reset, handleSubmit, Field, Submit, Form } = useCustomForm({
    name: '',
    number: '',
  });
  const { handleFilterReset } = useFilter();

  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleAddContant = data => {
    if (contacts.find(({ name }) => name === data.name)) {
      toast.error(data.name + ' is already in contacts!');
      return;
    }

    addContact(data).then(result =>
      !result.error
        ? toast.success(data.name + ' added to phonebook successfully')
        : toast.error('Failed to add contact, retry later!')
    );

    reset();
    handleFilterReset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleAddContant)} width="260px">
        <Field
          ac
          label="Name"
          placeholder="John However"
          pattern={{
            value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            message: 'May contain only letters, apostrophe, dash and spaces',
          }}
        />
        <Field
          ac
          type="tel"
          label="Number"
          placeholder="+38(0XX)XXX-XX-XX"
          pattern={{
            value:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message:
              'This must be digits and may contain spaces, dashes, parentheses or start with +.',
          }}
        />
        <Submit label="Add Contact" isLoading={isLoading} />
      </Form>
    </>
  );
};

export default ContactsForm;
