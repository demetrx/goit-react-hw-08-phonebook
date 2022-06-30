import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'services/contacts-api';
import { authSelectors } from 'redux/authSlice';
import { Button } from 'components/UI/Button/Button';
import Box from 'components/UI/Box';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserMail);
  const [logout] = useLogoutMutation();

  return (
    <Box display="flex" alignItems="center">
      <Box as="p" mr={3}>
        {email}
      </Box>
      <Button onClick={logout}>Log Out</Button>
    </Box>
  );
};

export default UserMenu;
