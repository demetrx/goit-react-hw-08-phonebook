import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSlice';

import NavLink from 'components/UI/NavLink/NavLink';
import Box from 'components/UI/Box';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box as="nav" display="flex" gap={5}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Box>
  );
};

export default Navigation;
