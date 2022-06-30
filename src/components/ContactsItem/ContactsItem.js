import { useRemoveContactMutation } from 'services/contacts-api';
import { ItemWrap, Contact } from './ContactsItem.styled';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Button } from 'components/UI/Button/Button';
import Box from 'components/UI/Box';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const ContactsItem = ({ id, name, number, onEdit }) => {
  const [onDelete, { isLoading, isSuccess }] = useRemoveContactMutation();

  useEffect(() => {
    isSuccess && toast.success(name + ' deleted from phonebook!');
  }, [isSuccess, name]);

  return (
    <li key={id}>
      <ItemWrap>
        <Box display="flex" gap={3}>
          <Button icon={PermContactCalendarIcon} as="div" />
          <Contact>
            {name}: {number}
          </Contact>
        </Box>
        <Box display="flex" gap={3}>
          <Button
            disabled={isLoading || isSuccess}
            onClick={() => onEdit(id)}
            icon={EditIcon}
          />
          <Button
            disabled={isLoading || isSuccess}
            onClick={() => onDelete(id)}
            icon={DeleteIcon}
          />
        </Box>
      </ItemWrap>
    </li>
  );
};

export default ContactsItem;
