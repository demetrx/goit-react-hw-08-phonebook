import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Container from './UI/Container/Container';
import { PrivateOutlet, RestrictedOutlet } from 'routes';
import { useRefreshQuery } from 'services/contacts-api';

const HomeView = lazy(() =>
  import('views/HomeView/HomeView' /* webpackChunkName: "home-view" */)
);

const ContactsView = lazy(() =>
  import(
    'views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  )
);

const SignUpView = lazy(() =>
  import('views/SignUpView/SignUpView' /* webpackChunkName: "signup-view" */)
);

const LogInView = lazy(() =>
  import('views/LogInView/LogInView' /* webpackChunkName: "login-view" */)
);

const App = () => {
  const { isLoading: isRefreshing } = useRefreshQuery();

  return (
    !isRefreshing && (
      <>
        <AppBar />

        <Container>
          <Suspense fallback={<h1>LOADING THE ROUTE...</h1>}>
            <Routes>
              <Route index path="/" element={<HomeView />} />
              <Route
                path="/signup"
                element={<RestrictedOutlet redirectTo="/" />}
              >
                <Route path="/signup" element={<SignUpView />} />
              </Route>
              <Route
                path="/login"
                element={<RestrictedOutlet redirectTo="/" />}
              >
                <Route path="/login" element={<LogInView />} />
              </Route>
              <Route
                path="/contacts"
                element={<PrivateOutlet redirectTo="/login" />}
              >
                <Route path="/contacts" element={<ContactsView />} />
              </Route>
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Suspense>
        </Container>
      </>
    )
  );
};

export default App;
