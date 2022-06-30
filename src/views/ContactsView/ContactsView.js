import { useState } from 'react';
import Filter from 'components/Filter/Filter';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Modal from 'components/UI/Modal/Modal';
import Section from 'components/UI/Section/Section';
import EditContact from 'components/EditContact/EditContact';
import { Title, MainContent } from './ContactsView.styled';
import { Logo } from 'components/Logo/Logo.styled';
import Box from 'components/UI/Box';

const ContactsView = () => {
  const [contactToEdit, setContactToEdit] = useState(null);
  const handleCloseModal = () => setContactToEdit(null);

  return (
    <>
      {contactToEdit && (
        <Modal onClose={handleCloseModal}>
          <Section title="Edit Contact" px={7}>
            <EditContact id={contactToEdit} onClose={handleCloseModal} />
          </Section>
        </Modal>
      )}

      <Box display="flex" justifyContent="start" mt={5} gap={3}>
        <Logo width={50} m={0} />
        <Title>Phonebook</Title>
      </Box>

      <MainContent>
        <Section>
          <ContactsForm />
        </Section>

        <Section title="Contacts list">
          <Filter />
          <ContactsList onEdit={setContactToEdit} />
        </Section>
      </MainContent>
    </>
  );
};

export default ContactsView;
