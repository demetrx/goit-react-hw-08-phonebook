import { useEffect } from 'react';
import { useSignupMutation } from 'services/contacts-api';
import { Title, AuthLink, Auth } from './SignUpView.styled';
import useCustomForm from 'hooks/useCustomForm';
import Box from 'components/UI/Box';
import toast from 'react-hot-toast';

const SignUpView = () => {
  const [signup, { isLoading, isError }] = useSignupMutation();
  const { handleSubmit, Field, Submit, Form } = useCustomForm({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    isError && toast.error('Sign up failed. Please, try again!');
  }, [isError]);

  const handleSignUp = data => {
    signup(data);
  };

  return (
    <Auth>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <Field ac label="Name" />
        <Field ac label="E-mail" type="email" />
        <Field ac label="Password" type="password" />
        <Submit label="Sign Up" isLoading={isLoading} />
      </Form>
      <Box mt={4} as="p">
        Have an account already? <AuthLink to="/login">Log In</AuthLink>.
      </Box>
    </Auth>
  );
};

export default SignUpView;
