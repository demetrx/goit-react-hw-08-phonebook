import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSlice';
import { NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </nav>
  );
};

export default Navigation;
