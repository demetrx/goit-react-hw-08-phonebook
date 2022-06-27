import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { Header, HeaderContainer } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSlice';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <HeaderContainer>
        <Navigation />
        {isLoggedIn ? (
          <>
            <UserMenu />
          </>
        ) : (
          <AuthNav />
        )}
      </HeaderContainer>
    </Header>
  );
};

export default AppBar;
