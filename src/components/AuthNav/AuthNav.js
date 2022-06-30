import NavLink from '../UI/NavLink/NavLink';
import Box from 'components/UI/Box';

const AuthNav = () => {
  return (
    <Box as="nav" display="flex" gap={5}>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Box>
  );
};

export default AuthNav;
