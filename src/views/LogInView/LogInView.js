import { useEffect } from 'react';
import { useLoginMutation } from 'services/contacts-api';
import { Title, AuthLink, Auth } from '../SignUpView/SignUpView.styled';
import useCustomForm from 'hooks/useCustomForm';
import Box from 'components/UI/Box';
import toast from 'react-hot-toast';

const SignUpView = () => {
  const [login, { isLoading, isError }] = useLoginMutation();
  const { handleSubmit, Field, Submit, Form } = useCustomForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    isError && toast.error('Login failed. Please, try again!');
  }, [isError]);

  const handleLogIn = data => {
    login(data);
  };

  return (
    <Auth>
      <Title>Log In</Title>
      <Form onSubmit={handleSubmit(handleLogIn)}>
        <Field label="E-mail" ac type="email" />
        <Field label="Password" ac type="password" />
        <Submit label="Log In" isLoading={isLoading} />
      </Form>
      <Box mt={4} as="p">
        Don`t have an account yet? <AuthLink to="/signup">Sign up</AuthLink>.
      </Box>
    </Auth>
  );
};

export default SignUpView;
