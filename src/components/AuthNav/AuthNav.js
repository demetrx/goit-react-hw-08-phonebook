import { AuthNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <nav>
      <AuthNavLink to="/signup">Sign Up</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </nav>
  );
};

export default AuthNav;
