import ContactsForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/UI/Section/Section';

const ContactsView = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default ContactsView;
